/// <reference types="googlemaps" />
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Circle extends BaseMapDirective {
    private ng2MapComp;
    center: any;
    clickable: any;
    draggable: any;
    editable: any;
    fillColor: any;
    fillOpacity: any;
    map: any;
    radius: any;
    strokeColor: any;
    strokeOpacity: any;
    strokePosition: any;
    strokeWeight: any;
    visible: any;
    zIndex: any;
    options: any;
    mapObject: google.maps.Circle;
    objectOptions: google.maps.CircleOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
    setCenter(): void;
}
