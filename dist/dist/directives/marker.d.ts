/// <reference types="googlemaps" />
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';
export declare class Marker extends BaseMapDirective {
    private geolocation;
    private geoCoder;
    protected mapObject: google.maps.Marker;
    protected objectOptions: google.maps.MarkerOptions;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder, geolocation: NavigatorGeolocation, geoCoder: GeoCoder);
    initialize(map: google.maps.Map): void;
    setPosition(): void;
}
