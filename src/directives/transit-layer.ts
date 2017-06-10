import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [];
const OUTPUTS = [ ];

@Directive({
  selector: 'ngui-map > transit-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class TransitLayer extends BaseMapDirective {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'TransitLayer', INPUTS, OUTPUTS);
  }
}