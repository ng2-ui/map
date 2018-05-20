import {Injectable, NgZone} from '@angular/core';
import {Observable, Observer} from 'rxjs';

/**
 *  service for navigator.geolocation methods
 */
@Injectable()
export class NavigatorGeolocation {

  constructor(public zone: NgZone) {
  }

  getCurrentPosition(geoLocationOptions?: PositionOptions): Observable<any> {
    geoLocationOptions = geoLocationOptions || {timeout: 5000};

    return new Observable<any>((responseObserver: Observer<any>) => {
      if (navigator.geolocation) {
        const zone = this.zone;
        navigator.geolocation.getCurrentPosition(
          (position) => {
            zone.run(() => {
              responseObserver.next(position);
              responseObserver.complete();
            });
          },
          (evt) => this.zone.run(() => {
            responseObserver.error(evt);
            responseObserver.complete();
          }),
          geoLocationOptions
        );
      } else {
        responseObserver.error('Browser Geolocation service failed.');
      }
    });
  }
}
