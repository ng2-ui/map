"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var option_builder_1 = require('./services/option-builder');
exports.OptionBuilder = option_builder_1.OptionBuilder;
var geo_coder_1 = require('./services/geo-coder');
exports.GeoCoder = geo_coder_1.GeoCoder;
var navigator_geolocation_1 = require('./services/navigator-geolocation');
exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
var ng2_map_1 = require('./services/ng2-map');
exports.Ng2Map = ng2_map_1.Ng2Map;
var ng2_map_component_1 = require('./components/ng2-map.component');
exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
var marker_1 = require('./directives/marker');
exports.Marker = marker_1.Marker;
var circle_1 = require('./directives/circle');
exports.Circle = circle_1.Circle;
var info_window_1 = require('./components/info-window');
exports.InfoWindow = info_window_1.InfoWindow;
var Ng2MapModule = (function () {
    function Ng2MapModule() {
    }
    Ng2MapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, circle_1.Circle, info_window_1.InfoWindow],
                    providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
                    exports: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, circle_1.Circle, info_window_1.InfoWindow],
                },] },
    ];
    /** @nocollapse */
    Ng2MapModule.ctorParameters = [];
    return Ng2MapModule;
}());
exports.Ng2MapModule = Ng2MapModule;
//# sourceMappingURL=index.js.map