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
var core_1 = require('@angular/core');
var ng2_map_1 = require("ng2-map");
var AppComponent = (function () {
    function AppComponent() {
        this.center = "Brampton, Canada";
        this.positions = [];
    }
    AppComponent.prototype.clicked = function (marker) {
        marker.map.mapComponent.openInfoWindow('iw', marker, {
            lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
        });
    };
    AppComponent.prototype.showRandomMarkers = function () {
        var randomLat, randomLng;
        this.positions = [];
        for (var i = 0; i < 9; i++) {
            randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
            randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
            this.positions.push([randomLat, randomLng]);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [ng2_map_1.NG2_MAP_DIRECTIVES],
            template: document.querySelector('#my-app-template').innerHTML
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map