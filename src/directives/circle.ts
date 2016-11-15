import { Directive } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';

const INPUTS = [
  'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
const OUTPUTS = [
  'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
  'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];

@Directive({
  selector: 'ng2-map>circle',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Circle extends BaseMapDirective {
  protected mapObject: google.maps.Circle;
  protected objectOptions: google.maps.CircleOptions = <google.maps.CircleOptions>{};

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
    this.setCenter();
  }

  setCenter(): void {
    if (!this['center']) {
      this.geolocation.getCurrentPosition().subscribe(center => {
        console.log('setting circle center from current location');
        let latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
        this.mapObject.setCenter(latLng);
      });
    } else if (typeof this['center'] === 'string') {
      this.geoCoder.geocode({address: this['center']}).subscribe(results => {
        console.log('setting circle center from address', this['center']);
        this.mapObject.setCenter(results[0].geometry.location);
      });
    }
  }
}
