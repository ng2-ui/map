import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = ['autoRefresh', 'options' ];
const OUTPUTS = [ ];

@Directive({
  selector: 'ngui-map > traffic-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class TrafficLayer extends BaseMapDirective {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'TrafficLayer', INPUTS, OUTPUTS);
  }
}