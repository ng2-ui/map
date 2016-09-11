/// <reference types="googlemaps" />
import { SimpleChange, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from "../services/option-builder";
import { NavigatorGeolocation } from "../services/navigator-geolocation";
import { GeoCoder } from "../services/geo-coder";
import { Ng2Map } from "../services/ng2-map";
export declare class Marker implements OnChanges, OnDestroy {
    ng2Map: Ng2Map;
    private optionBuilder;
    private geolocation;
    private geoCoder;
    private marker;
    private options;
    private inputChanges$;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder, geolocation: NavigatorGeolocation, geoCoder: GeoCoder);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    initialize(map: google.maps.Map): void;
    setPosition(): void;
    ngOnDestroy(): void;
}
