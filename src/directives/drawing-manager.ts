import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [
  'options',
  'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
  'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
const OUTPUTS = [
  'circlecomplete', 'markercomplete', 'overlaycomplete',
  'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];

@Directive({
  selector: 'ngui-map > drawing-manager',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class DrawingManager extends BaseMapDirective {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS);
    this.libraryName = 'drawing';
  }
}
