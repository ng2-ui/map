"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        var getCurrentPosition$ = new Subject_1.Subject();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) { return getCurrentPosition$.next(position); }, function (evt) { return getCurrentPosition$.error(evt); }, geoLocationOptions);
        }
        else {
            getCurrentPosition$.error('Browser Geolocation service failed.');
        }
        return getCurrentPosition$;
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