import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = ['autoRefresh', 'options' ];
const OUTPUTS = [ ];

@Directive({
  selector: 'ng2-map > traffic-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class TrafficLayer extends BaseMapDirective {
  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'TrafficLayer', INPUTS, OUTPUTS);
  }
}