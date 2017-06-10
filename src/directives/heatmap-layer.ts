import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [ 'data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options' ];
const OUTPUTS = [];

@Directive({
  selector: 'ngui-map > heatmap-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class HeatmapLayer extends BaseMapDirective {
  public libraryName: string;

  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
    this.libraryName = 'visualization';
  }
}
