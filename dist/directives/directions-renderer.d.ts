/// <reference types="googlemaps" />
import { SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
export declare class DirectionsRenderer extends BaseMapDirective implements OnChanges {
    geolocation: NavigatorGeolocation;
    directions: any;
    draggable: any;
    hideRouteList: any;
    infoWindow: any;
    panel: any;
    markerOptions: any;
    polylineOptions: any;
    preserveViewport: any;
    routeIndex: any;
    suppressBicyclingLayer: any;
    suppressInfoWindows: any;
    suppressMarkers: any;
    suppressPolylines: any;
    directionsRequest: google.maps.DirectionsRequest;
    initialized$: EventEmitter<any>;
    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;
    constructor(ng2MapComponent: Ng2MapComponent, geolocation: NavigatorGeolocation);
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showDirections(directionsRequest: google.maps.DirectionsRequest): void;
}
