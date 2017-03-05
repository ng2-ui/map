import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class BicyclingLayer extends BaseMapDirective {
    initialized$: EventEmitter<any>;
    constructor(ng2MapComp: Ng2MapComponent);
}
