import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [];
const OUTPUTS = [ ];

@Directive({
  selector: 'ngui-map > bicycling-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class BicyclingLayer extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS);
  }
}