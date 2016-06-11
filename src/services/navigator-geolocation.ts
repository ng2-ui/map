import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs/Rx";

/**
 *  service for navigator.geolocation methods
 */
@Injectable()
export class NavigatorGeolocation {

  getCurrentPosition(geoLocationOptions?) : Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 5000 };
   
    let getCurrentPosition$ = new Subject();
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          getCurrentPosition$.next(position);
        }, function(evt) {
          getCurrentPosition$.error(evt);
        },
        geoLocationOptions
      );
    } else {
      getCurrentPosition$.error("Browser Geolocation service failed.");
    }

    return getCurrentPosition$;
  };

}
