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
var common_1 = require('@angular/common');
var option_builder_1 = require("./services/option-builder");
exports.OptionBuilder = option_builder_1.OptionBuilder;
var geo_coder_1 = require("./services/geo-coder");
exports.GeoCoder = geo_coder_1.GeoCoder;
var navigator_geolocation_1 = require("./services/navigator-geolocation");
exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
var ng2_map_1 = require("./services/ng2-map");
exports.Ng2Map = ng2_map_1.Ng2Map;
var ng2_map_component_1 = require('./components/ng2-map.component');
exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
var marker_1 = require('./directives/marker');
exports.Marker = marker_1.Marker;
var info_window_1 = require('./components/info-window');
exports.InfoWindow = info_window_1.InfoWindow;
var Ng2MapModule = (function () {
    function Ng2MapModule() {
    }
    Ng2MapModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow],
            providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
            exports: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2MapModule);
    return Ng2MapModule;
}());
exports.Ng2MapModule = Ng2MapModule;
//# sourceMappingURL=index.js.map