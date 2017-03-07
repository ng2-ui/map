"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new Observable_1.Observable(function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    ;
    NavigatorGeolocation.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NavigatorGeolocation.ctorParameters = [];
    return NavigatorGeolocation;
}());
exports.NavigatorGeolocation = NavigatorGeolocation;
//# sourceMappingURL=navigator-geolocation.js.map