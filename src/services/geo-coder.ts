import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { NgMapApiLoader } from './api-loader';

/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */

@Injectable()
export class GeoCoder {
  constructor(private apiLoader: NgMapApiLoader) {}

  geocode(options: google.maps.GeocoderRequest) {
    return new Observable((responseObserver: Observer<any>) => {
        this.apiLoader.api$
          .subscribe(() => this.requestGeocode(options, responseObserver));
    });
  }

  private requestGeocode(options, observer) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(options, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        observer.next(results);
        observer.complete();
      } else {
        observer.error(results);
      }
    });
  }
}
