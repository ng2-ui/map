/// <reference types="googlemaps" />
import { SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { OptionBuilder } from './option-builder';
import { GeoCoder } from './geo-coder';
import { Ng2MapComponent } from '../components/ng2-map.component';
/**
 * collection of map instance-related properties and methods
 */
export declare class Ng2Map {
    private geoCoder;
    private optionBuilder;
    map: google.maps.Map;
    mapComponent: Ng2MapComponent;
    mapReady$: Subject<any>;
    constructor(geoCoder: GeoCoder, optionBuilder: OptionBuilder);
    setObjectEvents(definedEvents: string[], thisObj: any, prefix: string): void;
    updateGoogleObject(object: any, changes: SimpleChanges): void;
    updateProperty(object: any, key: string, currentValue: any): void;
}