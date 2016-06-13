import {Directive, EventEmitter, SimpleChange, OnChanges, OnDestroy} from '@angular/core';

import {OptionBuilder} from "../services/option-builder";
import {NavigatorGeolocation} from "../services/navigator-geolocation";
import {GeoCoder} from "../services/geo-coder";
import {Ng2Map} from "../services/ng2-map";
import {Subject} from "rxjs/Rx";

const INPUTS = `
  anchorPoint, animation, clickable, cursor, draggable, icon, label, opacity
  ,optimized,place, position, shape, title, visible, zIndex`.split(',').map(el => el.trim());
const OUTPUTS = `
  animation_changed, click, clickable_changed, cursor_changed, dblclick, drag, drag_end, draggable_changed,
  drag_start, flat_changed, icon_changed, mousedown, mouseout, mouseover, mouseup, position_changed, rightclick,
  shape_changed, title_changed, visible_changed, zindex_changed
  `.split(',').map(el => `marker${el.trim().replace(/^[a-z]/,x => x.toUpperCase())}`);

@Directive({
  selector: 'marker',
  moduleId: module.id,
  inputs: INPUTS,
  outputs: OUTPUTS
})
export class Marker implements OnChanges, OnDestroy {
  private marker: google.maps.Marker;
  private options: google.maps.MarkerOptions = <google.maps.MarkerOptions>{};
  private inputChanges$ = new Subject();
  
  constructor(
    public ng2Map: Ng2Map,
    private optionBuilder: OptionBuilder,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder
  ) {
    if (this.ng2Map.map) { //map is ready already
      this.initialize(this.ng2Map.map);
    } else {
      this.ng2Map.mapReady$.subscribe(map => this.initialize(map));
    }
    
    // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.inputChanges$.next(changes);
  }

  // called when map is ready
  initialize(map): void {
    console.log('......... marker is being initialized');
    
    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('MARKER options', this.options);

    this.options.map = map;
    // will be set after geocoded
    typeof this.options.position === 'string' && (delete this.options.position);
    this.marker = new google.maps.Marker(this.options);
  
    this.setPosition();
    
    //set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'marker');
    
    // update marker when input changes
    this.inputChanges$
      .subscribe(changes => {
        console.log('marker options are changed', changes);
        this.ng2Map.updateGoogleObject(this.marker, changes)
      });
  }

  setPosition(): void {
    setTimeout(() => {  // *ngFor position=".." does not refelect its value immediately
      if (!this['position']) {
        this.geolocation.getCurrentPosition().subscribe(position => {
          console.log('setting marker position from current location');
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.marker.setPosition(latLng);
        });
      }
      else if (typeof this['position'] === 'string') {
        this.geoCoder.geocode({address: this['position']}).subscribe(results => {
          console.log('setting marker position from address', this['position']);
          this.marker.setPosition(results[0].geometry.location);
        })
      }
    }, 500);
  }

  ngOnDestroy() {
    OUTPUTS.forEach(output => google.maps.event.clearListeners(this.marker, output));
    delete this.marker.setMap(null);
    delete this.marker;
  }

}
