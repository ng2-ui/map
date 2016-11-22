"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = (function () {
    function GeoCoder() {
    }
    GeoCoder.prototype.geocode = function (options) {
        var geocode$ = new Subject_1.Subject();
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                geocode$.next(results);
            }
            else {
                geocode$.error(results);
            }
        });
        return geocode$;
    };
    ;
    GeoCoder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GeoCoder.ctorParameters = [];
    return GeoCoder;
}());
exports.GeoCoder = GeoCoder;
//# sourceMappingURL=geo-coder.js.map