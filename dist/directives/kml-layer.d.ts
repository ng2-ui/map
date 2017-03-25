import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class KmlLayer extends BaseMapDirective {
    clickable: any;
    preserveViewport: any;
    screenOverlays: any;
    suppressInfoWindows: any;
    url: any;
    zIndex: any;
    options: any;
    click: any;
    defaultviewport_changed: any;
    status_changed: any;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComp: Ng2MapComponent);
}
