"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = (function () {
    function GeoCoder() {
    }
    GeoCoder.prototype.geocode = function (options) {
        var geocoder = new google.maps.Geocoder();
        return new Observable_1.Observable(function (responseObserver) {
            geocoder.geocode(options, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    responseObserver.next(results);
                    responseObserver.complete();
                }
                else {
                    responseObserver.error(results);
                }
            });
        });
    };
    ;
    GeoCoder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GeoCoder.ctorParameters = function () { return []; };
    return GeoCoder;
}());
exports.GeoCoder = GeoCoder;
//# sourceMappingURL=geo-coder.js.map