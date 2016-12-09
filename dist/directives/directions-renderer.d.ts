/// <reference types="googlemaps" />
import { SimpleChanges } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
import { NavigatorGeolocation } from "../services/navigator-geolocation";
export declare class DirectionsRenderer extends BaseMapDirective {
    geolocation: NavigatorGeolocation;
    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;
    directionsRequest: google.maps.DirectionsRequest;
    constructor(ng2MapComponent: Ng2MapComponent, geolocation: NavigatorGeolocation);
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showDirections(directionsRequest: google.maps.DirectionsRequest): void;
}
