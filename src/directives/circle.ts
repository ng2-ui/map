import { Directive, EventEmitter, SimpleChange, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';

const INPUTS = [
  'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex',
];
const OUTPUTS = [
  'circleCenterChanged', 'circleClick', 'circleDblclick', 'circleDrag', 'circleDragend', 'circleDragstart',
  'circleMousedown', 'circleMousemove', 'circleMouseout', 'circleMouseover', 'circleMouseup', 'circleRadiusChanged', 'circleRightclick',
];

@Directive({
  selector: 'ng2-map>circle',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Circle implements OnInit, OnChanges, OnDestroy {
  private circle: google.maps.Circle;
  private options: google.maps.CircleOptions = <google.maps.CircleOptions>{};
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
    console.log('circle is being initialized');

    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('CIRCLE options', this.options);

    this.options.map = map;
    // will be set after geocoded
    typeof this.options.center === 'string' && (delete this.options.center);
    this.circle = new google.maps.Circle(this.options);

    this.setCenter();

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'circle');

    // update circle when input changes
    this.inputChanges$
      .subscribe((changes: SimpleChange) => {
        console.log('circle options are changed', changes);
        this.ng2Map.updateGoogleObject(this.circle, changes);
      });
  }

  setCenter(): void {
    if (!this['center']) {
      this.geolocation.getCurrentPosition().subscribe(center => {
        console.log('setting circle center from current location');
        let latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
        this.circle.setCenter(latLng);
      });
    } else if (typeof this['center'] === 'string') {
      this.geoCoder.geocode({address: this['center']}).subscribe(results => {
        console.log('setting circle center from address', this['center']);
        this.circle.setCenter(results[0].geometry.location);
      });
    }
  }

  ngOnDestroy() {
    if (this.circle) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.circle, output));
      delete this.circle.setMap(null);
      delete this.circle;
    }
  }
}
