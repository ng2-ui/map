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
var polygon_1 = require('./directives/polygon');
exports.Polygon = polygon_1.Polygon;
var info_window_1 = require('./components/info-window');
exports.InfoWindow = info_window_1.InfoWindow;
var polyline_1 = require('./directives/polyline');
exports.Polyline = polyline_1.Polyline;
var ground_overlay_1 = require('./directives/ground-overlay');
exports.GroundOverlay = ground_overlay_1.GroundOverlay;
var kml_layer_1 = require("./directives/kml-layer");
exports.KmlLayer = kml_layer_1.KmlLayer;
var bicycling_layer_1 = require("./directives/bicycling-layer");
exports.BicyclingLayer = bicycling_layer_1.BicyclingLayer;
var transit_layer_1 = require("./directives/transit-layer");
exports.TransitLayer = transit_layer_1.TransitLayer;
var traffic_layer_1 = require("./directives/traffic-layer");
exports.TrafficLayer = traffic_layer_1.TrafficLayer;
var heatmap_layer_1 = require("./directives/heatmap-layer");
exports.HeatmapLayer = heatmap_layer_1.HeatmapLayer;
var data_layer_1 = require("./directives/data-layer");
exports.DataLayer = data_layer_1.DataLayer;
var street_view_panorama_1 = require("./directives/street-view-panorama");
exports.StreetViewPanorama = street_view_panorama_1.StreetViewPanorama;
var places_auto_complete_1 = require("./directives/places-auto-complete");
exports.PlacesAutoComplete = places_auto_complete_1.PlacesAutoComplete;
var directions_renderer_1 = require("./directives/directions-renderer");
exports.DirectionsRenderer = directions_renderer_1.DirectionsRenderer;
var COMPONENTS_DIRECTIVES = [
    ng2_map_component_1.Ng2MapComponent, info_window_1.InfoWindow,
    marker_1.Marker, circle_1.Circle, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer
];
var Ng2MapModule = (function () {
    function Ng2MapModule() {
    }
    Ng2MapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: COMPONENTS_DIRECTIVES,
                    providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
                    exports: [COMPONENTS_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    Ng2MapModule.ctorParameters = [];
    return Ng2MapModule;
}());
exports.Ng2MapModule = Ng2MapModule;
//# sourceMappingURL=index.js.map