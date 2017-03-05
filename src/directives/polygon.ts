import { Directive, Output, EventEmitter } from '@angular/core';

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
  selector: 'ng2-map>polygon, ng2-map>map-polygon',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polygon extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'Polygon', INPUTS, OUTPUTS);
  }
}
