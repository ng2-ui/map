import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class DrawingManager extends BaseMapDirective {
    options: any;
    circleOptions: any;
    drawingControl: any;
    drawingControlOptions: any;
    drawingMode: any;
    map: any;
    markerOptions: any;
    polygonOptions: any;
    polylineOptions: any;
    rectangleOptions: any;
    circlecomplete: any;
    markercomplete: any;
    overlaycomplete: any;
    polygoncomplete: any;
    polylinecomplete: any;
    rectanglecomplete: any;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComp: Ng2MapComponent);
}
