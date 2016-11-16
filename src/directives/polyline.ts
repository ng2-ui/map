import { Directive } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';

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
  protected mapObject: google.maps.Polyline;
  protected objectOptions: google.maps.PolylineOptions = <google.maps.PolylineOptions>{};

  constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder) {
    super(ng2Map, optionBuilder, INPUTS, OUTPUTS);
  }
}

