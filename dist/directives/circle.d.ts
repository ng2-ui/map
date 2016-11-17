/// <reference types="googlemaps" />
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';

export declare class Circle {
    private geolocation;
    private geoCoder;
    protected mapObject: google.maps.Circle;
    protected objectOptions: google.maps.CircleOptions;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder, geolocation: NavigatorGeolocation, geoCoder: GeoCoder);
    initialize(map: google.maps.Map): void;
    setCenter(): void;
}