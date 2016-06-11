import {
  Component,
  ElementRef,
  ViewEncapsulation,
  NgZone,
  OnChanges,
  SimpleChange
} from '@angular/core';

import {OptionBuilder} from "../services/option-builder";
import {NavigatorGeolocation} from "../services/navigator-geolocation";
import {GeoCoder} from "../services/geo-coder";
import {Ng2Map} from "../services/ng2-map";

const INPUTS = `
  backgroundColor, center, disableDefaultUI, disableDoubleClickZoom, draggable, draggableCursor,
  draggingCursor, heading, keyboardShortcuts, mapMaker, mapTypeControl, mapTypeId, maxZoom, minZoom,
  noClear, overviewMapControl, panControl, panControlOptions, rotateControl, scaleControl, scrollwheel,
  streetView, styles, tilt, zoom, streetViewControl, zoomControl, mapTypeControlOptions,
  overviewMapControlOptions, rotateControlOptions, scaleControlOptions, streetViewControlOptions,
  zoomControlOptions`.split(',').map(el => el.trim());

@Component({
  selector: 'ng2-map',
  providers: [Ng2Map, OptionBuilder, GeoCoder, NavigatorGeolocation],
  moduleId: module.id,
  styles: [`.google-map {width: 100%; height: 100%}`],
  inputs: INPUTS,
  encapsulation: ViewEncapsulation.None,
  template: `<div class="google-map"><ng-content></ng-content></div>`
})
export class Ng2MapComponent implements OnChanges {

  public el: HTMLElement;
  public map: google.maps.Map;
  public mapOptions: google.maps.MapOptions = {};

  constructor(
    private optionBuilder: OptionBuilder,
    private elementRef: ElementRef,
    private zone: NgZone,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder,
    private ng2Map: Ng2Map
  ) {
    this.addGoogleMapsApi();
  }
  
  addGoogleMapsApi(): void {
    window['ng2MapComponentRef'] = { zone: this.zone, componentFn: () => this.initializeMap()};
    window['initNg2Map'] = function() {
      window['ng2MapComponentRef'].zone.run(function() {window['ng2MapComponentRef'].componentFn();})
    };
    if (!window['google'] && !document.querySelector('#ng2-map-api')) {
      var script = document.createElement( 'script' );
      script.id ="ng2-map-api";
      script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
      document.querySelector('body').appendChild(script);
    }
  }
  
  initializeMap(): void {
    this.el = this.elementRef.nativeElement.querySelector('.google-map');
    INPUTS.forEach(option => {
      if (this[option] !== undefined)  {
        console.log('map option', option, this[option]);
        this.mapOptions[option] = this.optionBuilder.googlize(this[option]);
      }
    });
    
    console.log('this.mapOptions', this.mapOptions);
    if (typeof this.mapOptions.center === 'string') {
      delete this.mapOptions.center;
    }
    this.mapOptions.zoom = this.mapOptions.zoom || 15;
    this.map = new google.maps.Map(this.el, this.mapOptions);
    
    this.setDefaultCenter();
    this.setCenterFromAddress();
    
    // broadcast map ready message
    this.ng2Map.map = this.map;
    this.ng2Map.mapReady$.next(this.map);
  }
  
  setDefaultCenter(): void {
    if (!this['center']) {
      this.geolocation.getCurrentPosition().subscribe(position => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(latLng);
      });
    }
  }

  setCenterFromAddress(): void {
    if (typeof this['center'] === 'string') {
      this.geoCoder.geocode({address: this['center']}).subscribe(results => {
        console.log('results', this.map, results[0].geometry.location);
        this.map.setCenter(results[0].geometry.location);
      })
    }
  }
  
  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    let val: any, currentValue: any, setMethodName: string;
    if (this.map) {
      for (var key in changes) {
        setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
        currentValue = changes[key].currentValue;
        if (key === 'center' && typeof currentValue === 'string') {
          this.geoCoder.geocode({address: currentValue}).subscribe(results => {
            this.map.setCenter(results[0].geometry.location);
          })
        } else {
          val =  this.optionBuilder.googlize(currentValue);
          this.map[setMethodName](currentValue);
        }
      }
    }
  }  
}