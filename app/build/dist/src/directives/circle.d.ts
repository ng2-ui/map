/// <reference types="googlemaps" />
import { SimpleChange, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
export declare class Circle implements OnInit, OnChanges, OnDestroy {
    ng2Map: Ng2Map;
    private optionBuilder;
    private geolocation;
    private geoCoder;
    private circle;
    private options;
    private inputChanges$;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder, geolocation: NavigatorGeolocation, geoCoder: GeoCoder);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    initialize(map: google.maps.Map): void;
    setCenter(): void;
    ngOnDestroy(): void;
}
