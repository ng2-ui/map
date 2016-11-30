import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [ 'clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options' ];
const OUTPUTS = [ 'click', 'defaultviewport_changed', 'status_changed' ];

@Directive({
  selector: 'ng2-map > kml-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class KmlLayer extends BaseMapDirective {

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'KmlLayer', INPUTS, OUTPUTS);
  }
}
