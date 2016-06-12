import {Directive, EventEmitter, SimpleChange, OnChanges} from '@angular/core';

import {OptionBuilder} from "../services/option-builder";
import {NavigatorGeolocation} from "../services/navigator-geolocation";
import {GeoCoder} from "../services/geo-coder";
import {Ng2Map} from "../services/ng2-map";
import {Subject} from "rxjs/Rx";

const INPUTS = `anchorPoint, animation, clickable, cursor, draggable, icon, label, opacity
  ,optimized,place, position, shape, title, visible, zIndex`.split(',').map(el => el.trim());
const OUTPUTS = `click`.split(',').map(el => `marker${el.trim().replace(/^[a-z]/,x => x.toUpperCase())}`);
console.log('1111111111111111111', OUTPUTS);

@Directive({
  selector: 'marker',
  moduleId: module.id,
  inputs: INPUTS,
  outputs: OUTPUTS
})
export class Marker implements OnChanges {
  private marker: google.maps.Marker;
  private options: google.maps.MarkerOptions = <google.maps.MarkerOptions>{};
  private inputChanges$ = new Subject();
  
  constructor(
    public ng2Map: Ng2Map,
    private optionBuilder: OptionBuilder,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder
  ) {
    this.ng2Map.mapReady$.subscribe(map => this.initialize(map));
    // all outputs needs to be initialized, http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  // called when map is ready
  initialize(map): void {
    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('MARKER options', this.options);

    this.options.map = map;
    // will be set after geocoded
    typeof this.options.position === 'string' && (delete this.options.position);
    this.marker = new google.maps.Marker(this.options);
  
    this.setPosition();
    this.setEvents();
    
    // update marker when input changes
    this.inputChanges$
      .debounceTime(1000)
      .subscribe(changes =>this.optionBuilder.updateGoogleObject(this.marker, changes));
  }

  setPosition(): void {
    if (!this['position']) {
      this.geolocation.getCurrentPosition().subscribe(position => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.marker.setPosition(latLng);
      });
    }
    else if (typeof this['position'] === 'string') {
      this.geoCoder.geocode({address: this['position']}).subscribe(results => {
        this.marker.setPosition(results[0].geometry.location);
      })
    }
  }

  setEvents(): void {
    OUTPUTS.forEach(output => {
      let eventName = output.toLowerCase().replace(/marker/, '');
      let self = this;
      console.log('adding listener to marker', eventName);
      
      this.marker.addListener(eventName, function(event) {
        console.log('this as marker', this);
        self[output].emit(this);
      });
    });
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    let val: any, currentValue: any, setMethodName: string;
    this.inputChanges$.next(changes);
  }

  // // TODO: debounce?
  // // http://stackoverflow.com/questions/37768274/angular2-directive-input-onchanges-delaydebounce/37768303#37768303
  // ngOnChanges(changes: {[key: string]: SimpleChange}) {
  //   let val: any, currentValue: any, setMethodName: string;
  //   if (this.marker) {
  //     for (var key in changes) {
  //       setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
  //       currentValue = changes[key].currentValue;
  //       if (key === 'position' && typeof currentValue === 'string') {
  //         this.geoCoder.geocode({address: currentValue}).subscribe(results => {
  //           this.marker.setPosition(results[0].geometry.location);
  //         })
  //       } else {
  //         val =  this.optionBuilder.googlize(currentValue);
  //         this.marker[setMethodName](currentValue);
  //       }
  //     }
  //   }
  // }
}
