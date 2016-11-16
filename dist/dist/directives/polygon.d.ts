/// <reference types="googlemaps" />
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';
export declare class Polygon extends BaseMapDirective {
    protected mapObject: google.maps.Polygon;
    protected objectOptions: google.maps.PolygonOptions;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder);
}
