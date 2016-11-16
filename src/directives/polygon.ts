import { Directive } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';

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
  protected mapObject: google.maps.Polygon;
  protected objectOptions: google.maps.PolygonOptions = <google.maps.PolygonOptions>{};

  constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder) {
    super(ng2Map, optionBuilder, INPUTS, OUTPUTS);
  }
}
