import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */

@Injectable()
export class GeoCoder {

  geocode(options: google.maps.GeocoderRequest) {
    const geocoder = new google.maps.Geocoder();

    return new Observable((responseObserver: Observer<any>) => {
      geocoder.geocode(options, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          responseObserver.next(results);
          responseObserver.complete();
        } else {
          responseObserver.error(results);
        }
      });
    });
  };

}
