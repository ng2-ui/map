/// <reference types="googlemaps" />
import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class GroundOverlay extends BaseMapDirective {
    url: any;
    bounds: any;
    clickable: any;
    opacity: any;
    click: any;
    dblclick: any;
    initialized$: EventEmitter<any>;
    mapObject: google.maps.GroundOverlay;
    objectOptions: google.maps.GroundOverlayOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
}
