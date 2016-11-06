import { Directive, EventEmitter, SimpleChange, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';

const INPUTS = [
  'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
  'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex',
];
const OUTPUTS = [
  'markerAnimationChanged', 'markerClick', 'markerClickableChanged', 'markerCursorChanged', 'markerDblclick', 'markerDrag', 'markerDragend', 'markerDraggableChanged',
  'markerDragstart', 'markerFlatChanged', 'markerIconChanged', 'markerMousedown', 'markerMouseout', 'markerMouseover', 'markerMouseup', 'markerPositionChanged', 'markerRightclick',
  'markerShapeChanged', 'markerTitleChanged', 'markerVisibleChanged', 'markerZindexChanged',
];

@Directive({
  selector: 'ng2-map>marker',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Marker implements OnInit, OnChanges, OnDestroy {
  private marker: google.maps.Marker;
  private options: google.maps.MarkerOptions = <google.maps.MarkerOptions>{};
  private inputChanges$ = new Subject();

  constructor(
    public ng2Map: Ng2Map,
    private optionBuilder: OptionBuilder,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder
  ) {
    // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  ngOnInit() {
    if (this.ng2Map.map) { // map is ready already
      this.initialize(this.ng2Map.map);
    } else {
      this.ng2Map.mapReady$.subscribe((map: google.maps.Map) => this.initialize(map));
    }
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.inputChanges$.next(changes);
  }

  // called when map is ready
  initialize(map: google.maps.Map): void {
    console.log('marker is being initialized');

    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('MARKER options', this.options);

    this.options.map = map;
    // will be set after geocoded
    typeof this.options.position === 'string' && (delete this.options.position);
    this.marker = new google.maps.Marker(this.options);

    this.setPosition();

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'marker');

    // update marker when input changes
    this.inputChanges$
      .subscribe((changes: SimpleChange) => {
        console.log('marker options are changed', changes);
        this.ng2Map.updateGoogleObject(this.marker, changes);
      });
  }

  setPosition(): void {
    if (!this['position']) {
      this.geolocation.getCurrentPosition().subscribe(position => {
        console.log('setting marker position from current location');
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // console.log('this.marker', this.marker);
        this.marker.setPosition(latLng);
      });
    } else if (typeof this['position'] === 'string') {
      this.geoCoder.geocode({address: this['position']}).subscribe(results => {
        console.log('setting marker position from address', this['position']);
        // console.log('this.marker', this.marker);
        this.marker.setPosition(results[0].geometry.location);
      });
    }
  }

  ngOnDestroy() {
    if (this.marker) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.marker, output));
      delete this.marker.setMap(null);
      delete this.marker;
    }
  }
}
