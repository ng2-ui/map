/// <reference types="googlemaps" />
import { Subject } from 'rxjs/Subject';
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
export declare class GeoCoder {
    geocode(options: google.maps.GeocoderRequest): Subject<{}>;
}
