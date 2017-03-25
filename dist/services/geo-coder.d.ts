/// <reference types="googlemaps" />
import { Observable } from 'rxjs/Observable';
import { NgMapApiLoader } from './api-loader';
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
export declare class GeoCoder {
    private apiLoader;
    constructor(apiLoader: NgMapApiLoader);
    geocode(options: google.maps.GeocoderRequest): Observable<any>;
    private requestGeocode(options, observer);
}
