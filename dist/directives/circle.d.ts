/// <reference types="googlemaps" />
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Circle extends BaseMapDirective {
    private ng2MapComp;
    mapObject: google.maps.Circle;
    objectOptions: google.maps.CircleOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
    setCenter(): void;
}
