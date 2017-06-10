import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [
  'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
  'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
const OUTPUTS = [
  'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];

@Directive({
  selector: 'ngui-map > polyline',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polyline extends BaseMapDirective {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'Polyline', INPUTS, OUTPUTS);
  }
}

