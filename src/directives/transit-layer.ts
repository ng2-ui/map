import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

@Directive({
  selector: 'ng2-map > transit-layer',
})
export class TransitLayer extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'TransitLayer');
  }
}