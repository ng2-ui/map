import { Directive, EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';

const INPUTS = [
  'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
  'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options'
];
const OUTPUTS = [
  'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
  'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
  'dhapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];

@Directive({
  selector: 'ng2-map>marker',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Marker extends BaseMapDirective {
  protected mapObject: google.maps.Marker;
  protected objectOptions: google.maps.MarkerOptions = <google.maps.MarkerOptions>{};

  constructor(
    ng2Map: Ng2Map,
    optionBuilder: OptionBuilder,
    private geolocation: NavigatorGeolocation,
    private geoCoder: GeoCoder
  ) {
    super(ng2Map, optionBuilder, INPUTS, OUTPUTS);
  }

  initialize(map: google.maps.Map): void {
    super.initialize(map);
    this.setPosition();
  }

  setPosition(): void {
    if (!this['position']) {
      this.geolocation.getCurrentPosition().subscribe(position => {
        console.log('setting marker position from current location');
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // console.log('this.marker', this.marker);
        this.mapObject.setPosition(latLng);
      });
    } else if (typeof this['position'] === 'string') {
      this.geoCoder.geocode({address: this['position']}).subscribe(results => {
        console.log('setting marker position from address', this['position']);
        // console.log('this.marker', this.marker);
        this.mapObject.setPosition(results[0].geometry.location);
      });
    }
  }
}
