import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Polygon extends BaseMapDirective {
    clickable: any;
    draggable: any;
    editable: any;
    fillColor: any;
    fillOpacity: any;
    geodesic: any;
    paths: any;
    strokeColor: any;
    strokeOpacity: any;
    strokePosition: any;
    strokeWeight: any;
    visible: any;
    zIndex: any;
    options: any;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComp: Ng2MapComponent);
}
