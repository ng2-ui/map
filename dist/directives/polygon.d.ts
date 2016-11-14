/// <reference types="googlemaps" />
import { SimpleChange, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
export declare class Polygon implements OnInit, OnChanges, OnDestroy {
    ng2Map: Ng2Map;
    private optionBuilder;
    private polygon;
    private options;
    private inputChanges$;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    initialize(map: google.maps.Map): void;
    ngOnDestroy(): void;
}
