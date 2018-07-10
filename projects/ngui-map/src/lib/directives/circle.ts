import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [
  'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
  // ngui-map specific inputs
  'geoFallbackCenter'
];
const OUTPUTS = [
  'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
  'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];

@Directive({
  selector: 'ngui-map>circle, ngui-map>map-circle',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Circle extends BaseMapDirective {
  public mapObject: google.maps.Circle;
  public objectOptions: google.maps.CircleOptions = <google.maps.CircleOptions>{};

  constructor(private nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'Circle', INPUTS, OUTPUTS);
  }

  initialize(): void {
    super.initialize();
    this.setCenter();
  }

  setCenter(): void {
    if (!this['center']) {
      this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(
        center => {
          console.log('setting circle center from current location');
          let latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
          this.mapObject.setCenter(latLng);
        },
        error => {
          console.error('ngui-map, error in finding the current position');
          this.mapObject.setCenter(this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }
      ));
    } else if (typeof this['center'] === 'string') {
      this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({address: this['center']}).subscribe(
        results => {
          console.log('setting circle center from address', this['center']);
          this.mapObject.setCenter(results[0].geometry.location);
        },
        error => {
          console.error('ngui-map, error in finding location from', this['center']);
          this.mapObject.setCenter(this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }
      ));
    }
  }
}
