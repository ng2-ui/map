import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [
  'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
const OUTPUTS = [
  'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];

@Directive({
  selector: 'ngui-map>polygon, ngui-map>map-polygon',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polygon extends BaseMapDirective {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'Polygon', INPUTS, OUTPUTS);
  }
}
