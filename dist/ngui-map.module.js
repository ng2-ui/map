"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var option_builder_1 = require("./services/option-builder");
var geo_coder_1 = require("./services/geo-coder");
var navigator_geolocation_1 = require("./services/navigator-geolocation");
var config_1 = require("./services/config");
var api_loader_1 = require("./services/api-loader");
var ngui_map_component_1 = require("./components/ngui-map.component");
var info_window_1 = require("./components/info-window");
var custom_marker_1 = require("./components/custom-marker");
var bicycling_layer_1 = require("./directives/bicycling-layer");
var circle_1 = require("./directives/circle");
var data_layer_1 = require("./directives/data-layer");
var directions_renderer_1 = require("./directives/directions-renderer");
var drawing_manager_1 = require("./directives/drawing-manager");
var ground_overlay_1 = require("./directives/ground-overlay");
var heatmap_layer_1 = require("./directives/heatmap-layer");
var kml_layer_1 = require("./directives/kml-layer");
var marker_1 = require("./directives/marker");
var ngui_map_1 = require("./services/ngui-map");
var places_auto_complete_1 = require("./directives/places-auto-complete");
var polygon_1 = require("./directives/polygon");
var polyline_1 = require("./directives/polyline");
var street_view_panorama_1 = require("./directives/street-view-panorama");
var traffic_layer_1 = require("./directives/traffic-layer");
var transit_layer_1 = require("./directives/transit-layer");
var COMPONENTS_DIRECTIVES = [
    ngui_map_component_1.NguiMapComponent, info_window_1.InfoWindow,
    marker_1.Marker, circle_1.Circle, custom_marker_1.CustomMarker, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer,
    drawing_manager_1.DrawingManager,
];
var NguiMapModule = NguiMapModule_1 = (function () {
    function NguiMapModule() {
    }
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule_1,
            providers: [
                { provide: config_1.NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    return NguiMapModule;
}());
NguiMapModule = NguiMapModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: COMPONENTS_DIRECTIVES,
        exports: [COMPONENTS_DIRECTIVES],
        providers: [
            geo_coder_1.GeoCoder,
            navigator_geolocation_1.NavigatorGeolocation,
            ngui_map_1.NguiMap,
            option_builder_1.OptionBuilder,
            { provide: api_loader_1.NgMapApiLoader, useClass: api_loader_1.NgMapAsyncCallbackApiLoader },
        ]
    })
], NguiMapModule);
exports.NguiMapModule = NguiMapModule;
var NguiMapModule_1;
//# sourceMappingURL=ngui-map.module.js.map