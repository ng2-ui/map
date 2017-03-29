import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
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
    constructor(nguiMapComp: NguiMapComponent);
}
