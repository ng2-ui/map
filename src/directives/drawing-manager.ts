import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

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
  selector: 'ng2-map > drawing-manager',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class DrawingManager extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'DrawingManager', INPUTS, OUTPUTS);
    this.libraryName = 'drawing';
  }
}
