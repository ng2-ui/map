import { Injectable } from "@angular/core";
import {Subject} from "rxjs/Rx";

/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */

@Injectable()
export class GeoCoder {

  geocode(options: google.maps.GeocoderRequest) {
   
    let geocode$ = new Subject();
    let geocoder = new google.maps.Geocoder();
   
    geocoder.geocode(options, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        geocode$.next(results);
      } else {
        geocode$.error(results);
      }
    });

    return geocode$;
  };

}
