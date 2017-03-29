import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [ 'clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options' ];
const OUTPUTS = [ 'click', 'defaultviewport_changed', 'status_changed' ];

@Directive({
  selector: 'ngui-map > kml-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class KmlLayer extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'KmlLayer', INPUTS, OUTPUTS);
  }
}
