import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { IJson } from './util';

/**
 *  service for navigator.geolocation methods
 */
@Injectable()
export class NavigatorGeolocation {

  getCurrentPosition(geoLocationOptions?: IJson): Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 5000 };

    return new Observable<any>((responseObserver: Observer<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            responseObserver.next(position);
            responseObserver.complete();
          },
          (evt) => responseObserver.error(evt),
          geoLocationOptions
        );
      } else {
        responseObserver.error('Browser Geolocation service failed.');
      }
    });
  };
}
