import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

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
  public mapObject: google.maps.Circle;
  public objectOptions: google.maps.CircleOptions = <google.maps.CircleOptions>{};

  constructor(private ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, INPUTS, OUTPUTS);
  }

  initialize(): void {
    super.initialize();
    this.setCenter();
  }

  setCenter(): void {
    if (!this['center']) {
      this.ng2MapComp.geolocation.getCurrentPosition().subscribe(center => {
        console.log('setting circle center from current location');
        let latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
        this.mapObject.setCenter(latLng);
      });
    } else if (typeof this['center'] === 'string') {
      this.ng2MapComp.geoCoder.geocode({address: this['center']}).subscribe(results => {
        console.log('setting circle center from address', this['center']);
        this.mapObject.setCenter(results[0].geometry.location);
      });
    }
  }
}
