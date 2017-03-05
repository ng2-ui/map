import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Polyline extends BaseMapDirective {
    clickable: any;
    draggable: any;
    editable: any;
    geodesic: any;
    icons: any;
    path: any;
    strokeColor: any;
    strokeOpacity: any;
    strokeWeight: any;
    visible: any;
    zIndex: any;
    options: any;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComp: Ng2MapComponent);
}
