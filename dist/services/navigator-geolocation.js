"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        var getCurrentPosition$ = new Rx_1.Subject();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                getCurrentPosition$.next(position);
            }, function (evt) {
                getCurrentPosition$.error(evt);
            }, geoLocationOptions);
        }
        else {
            getCurrentPosition$.error("Browser Geolocation service failed.");
        }
        return getCurrentPosition$;
    };
    ;
    NavigatorGeolocation = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NavigatorGeolocation);
    return NavigatorGeolocation;
}());
exports.NavigatorGeolocation = NavigatorGeolocation;
//# sourceMappingURL=navigator-geolocation.js.map