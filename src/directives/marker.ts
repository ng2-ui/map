import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [
  'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
  'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
  // ng2-map specific inputs
  'geoFallbackPosition'
];
const OUTPUTS = [
  'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
  'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
  'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];

@Directive({
  selector: 'ng2-map > marker',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Marker extends BaseMapDirective {
  public mapObject: google.maps.Marker;
  public objectOptions: google.maps.MarkerOptions = <google.maps.MarkerOptions>{};

  constructor(private ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'Marker', INPUTS, OUTPUTS);
  }

  initialize(): void {
    super.initialize();
    this.setPosition();
  }

  setPosition(): void {
    if (!this['position']) {
      this._subscriptions.push(this.ng2MapComp.geolocation.getCurrentPosition().subscribe(
        position => {
          console.log('setting marker position from current location');
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.mapObject.setPosition(latLng);
        },
        error => {
          console.error('ng2-map, error finding the current location');
          this.mapObject.setPosition(this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }
      ));
    } else if (typeof this['position'] === 'string') {
      this._subscriptions.push(this.ng2MapComp.geoCoder.geocode({address: this['position']}).subscribe(
        results => {
          console.log('setting marker position from address', this['position']);
          this.mapObject.setPosition(results[0].geometry.location);
        },
        error => {
          console.error('ng2-map, error finding the location from', this['position']);
          this.mapObject.setPosition(this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }
      ));
    }
  }
}
