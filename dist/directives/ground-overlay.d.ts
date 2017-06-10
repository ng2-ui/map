/// <reference types="googlemaps" />
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
export declare class GroundOverlay extends BaseMapDirective {
    url: any;
    bounds: any;
    clickable: any;
    opacity: any;
    click: any;
    dblclick: any;
    mapObject: google.maps.GroundOverlay;
    objectOptions: google.maps.GroundOverlayOptions;
    constructor(nguiMapComp: NguiMapComponent);
    initialize(): void;
}
