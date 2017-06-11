/// <reference types="googlemaps" />
import { SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
export declare class DirectionsRenderer extends BaseMapDirective implements OnChanges, OnDestroy {
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
    directions_changed: any;
    directionsRequest: google.maps.DirectionsRequest;
    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;
    constructor(nguiMapComponent: NguiMapComponent, geolocation: NavigatorGeolocation);
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showDirections(directionsRequest: google.maps.DirectionsRequest): void;
    ngOnDestroy(): void;
}
