import {
  Component,
  ElementRef,
  ViewEncapsulation,
  NgZone,
  OnChanges,
  OnDestroy,
  EventEmitter,
  SimpleChange,
  AfterViewInit,
 } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { IJson } from '../services/util';

const INPUTS = [
  'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
  'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
  'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
  'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
  'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
];

const OUTPUTS = [
  'mapBoundsChanged', 'mapCenterChanged', 'mapClick', 'mapDblclick', 'mapDrag', 'mapDragend', 'mapDragstart', 'mapHeadingChanged', 'mapIdle',
  'mapTypeidChanged', 'mapMousemove', 'mapMouseout', 'mapMouseover', 'mapProjectionChanged', 'mapResize', 'mapRightclick',
  'mapTilesloaded', 'mapTileChanged', 'mapZoomChanged',
];

@Component({
  selector: 'ng2-map',
  providers: [Ng2Map, OptionBuilder, GeoCoder, NavigatorGeolocation],
  styles: [`
    ng2-map {display: block; height: 300px;}
    .google-map {width: 100%; height: 100%}
  `],
  inputs: INPUTS,
  outputs: OUTPUTS,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="google-map"></div>
    <ng-content></ng-content>
  `,
})
export class Ng2MapComponent implements OnChanges, OnDestroy, AfterViewInit {
  public el: HTMLElement;
  public map: google.maps.Map;
  public mapOptions: google.maps.MapOptions = {};
  public inputChanges$ = new Subject();

  // map objects by group
  public infoWindows: any = {};

  // map init path
  public mapInitPath: number; // 1: init after loading google api first, 2: init when view is initialized

  constructor(
    private optionBuilder: OptionBuilder,
    private elementRef: ElementRef,
    private zone: NgZone,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder,
    private ng2Map: Ng2Map
  ) {
    if (typeof google === 'undefined' || !google.maps.Map) {
      this.mapInitPath = 1;
      this.addGoogleMapsApi();
    }

    // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  ngAfterViewInit(): void {
    if (this.mapInitPath !== 1) {
      this.initializeMap();
    }
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.inputChanges$.next(changes);
  }

  addGoogleMapsApi(): void {
    window['ng2MapComponentRef'] = { zone: this.zone, componentFn: () => this.initializeMap()};
    window['initNg2Map'] = function() {
      window['ng2MapComponentRef'].zone.run(function() { window['ng2MapComponentRef'].componentFn(); });
    };
    if (!window['google'] && !document.querySelector('#ng2-map-api')) {
      let script = document.createElement( 'script' );
      script.id = 'ng2-map-api';

      // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
      let apiUrl = Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
      apiUrl += apiUrl.indexOf('?') ? '&' : '?';
      script.src = apiUrl + 'callback=initNg2Map';
      document.querySelector('body').appendChild(script);
    }
  }

  initializeMap(): void {
    this.el = this.elementRef.nativeElement.querySelector('.google-map');
    this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('ng2-map mapOptions', this.mapOptions);

    this.mapOptions.zoom = this.mapOptions.zoom || 15;
    typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);

    this.map = new google.maps.Map(this.el, this.mapOptions);
    this.map['mapObjectName'] = this.constructor['name'];

    if (!this.mapOptions.center) { // if center is not given as lat/lng
      this.setCenter();
    }

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');

    // broadcast map ready message
    this.ng2Map.map = this.map;
    this.ng2Map.mapComponent = this;
    this.ng2Map.map['mapComponent'] = this;

    // ........
    console.log('map is ready.......');
    this.ng2Map.mapReady$.next(this.map);

    // update map when input changes
    this.inputChanges$
      .debounceTime(1000)
      .subscribe((changes: SimpleChange) => this.ng2Map.updateGoogleObject(this.map, changes));
  }

  setCenter(): void {
    if (!this['center']) { // center is not from user. Thus, we set the current location
      this.geolocation.getCurrentPosition().subscribe(position => {
        console.log('setting map center from current location');
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(latLng);
      });
    }
    else if (typeof this['center'] === 'string') {
      this.geoCoder.geocode({address: this['center']}).subscribe(results => {
        console.log('setting map center from address', this['center']);
        this.map.setCenter(results[0].geometry.location);
      });
    }
  }

  openInfoWindow(id: string, anchor: google.maps.MVCObject, data: IJson) {
    this.infoWindows[id].open(anchor, data);
  }

  ngOnDestroy() {
    if (this.el) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.map, output));
    }
  }
}
