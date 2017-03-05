import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class DataLayer extends BaseMapDirective {
    controlPosition: any;
    controls: any;
    drawingMode: any;
    featureFactory: any;
    style: any;
    geoJson: any;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComponent: Ng2MapComponent);
    initialize(): void;
}
