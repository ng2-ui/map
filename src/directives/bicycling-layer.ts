import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [];
const OUTPUTS = [ ];

@Directive({
  selector: 'ng2-map > bicycling-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class BicyclingLayer extends BaseMapDirective {
  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'BicyclingLayer', INPUTS, OUTPUTS);
  }
}