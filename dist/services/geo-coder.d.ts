/// <reference types="googlemaps" />
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgMapApiLoader } from './api-loader';
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
export declare class GeoCoder implements OnDestroy {
    private apiLoader;
    private apiLoaderSubs;
    constructor(apiLoader: NgMapApiLoader);
    geocode(options: google.maps.GeocoderRequest): Observable<any>;
    ngOnDestroy(): void;
    private requestGeocode(options, observer);
}
