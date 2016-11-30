import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [
  'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
  'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
const OUTPUTS = [
  'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];

@Directive({
  selector: 'ng2-map > polyline',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polyline extends BaseMapDirective {
  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'Polyline', INPUTS, OUTPUTS);
  }
}

