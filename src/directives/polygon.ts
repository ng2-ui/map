import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [
  'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
const OUTPUTS = [
  'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];

@Directive({
  selector: 'ng2-map>polygon',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polygon extends BaseMapDirective {

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, INPUTS, OUTPUTS);
  }
}
