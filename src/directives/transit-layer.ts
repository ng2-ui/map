import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [];
const OUTPUTS = [ ];

@Directive({
  selector: 'ng2-map > transit-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class TransitLayer extends BaseMapDirective {
  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'TransitLayer', INPUTS, OUTPUTS);
  }
}