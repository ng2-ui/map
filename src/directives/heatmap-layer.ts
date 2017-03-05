import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [ 'data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options' ];
const OUTPUTS = [];

@Directive({
  selector: 'ng2-map > heatmap-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class HeatmapLayer extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  public libraryName: string;

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
    this.libraryName = 'visualization';
  }
}
