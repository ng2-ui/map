/// <reference types="googlemaps" />
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class GroundOverlay extends BaseMapDirective {
    mapObject: google.maps.GroundOverlay;
    objectOptions: google.maps.GroundOverlayOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
}
