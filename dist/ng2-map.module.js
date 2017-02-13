"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var option_builder_1 = require('./services/option-builder');
var geo_coder_1 = require('./services/geo-coder');
var navigator_geolocation_1 = require('./services/navigator-geolocation');
var config_1 = require('./services/config');
var ng2_map_component_1 = require('./components/ng2-map.component');
var info_window_1 = require('./components/info-window');
var custom_marker_1 = require('./components/custom-marker');
var bicycling_layer_1 = require('./directives/bicycling-layer');
var circle_1 = require('./directives/circle');
var data_layer_1 = require('./directives/data-layer');
var directions_renderer_1 = require('./directives/directions-renderer');
var drawing_manager_1 = require('./directives/drawing-manager');
var ground_overlay_1 = require('./directives/ground-overlay');
var heatmap_layer_1 = require('./directives/heatmap-layer');
var kml_layer_1 = require('./directives/kml-layer');
var marker_1 = require('./directives/marker');
var ng2_map_1 = require('./services/ng2-map');
var places_auto_complete_1 = require('./directives/places-auto-complete');
var polygon_1 = require('./directives/polygon');
var polyline_1 = require('./directives/polyline');
var street_view_panorama_1 = require('./directives/street-view-panorama');
var traffic_layer_1 = require('./directives/traffic-layer');
var transit_layer_1 = require('./directives/transit-layer');
var COMPONENTS_DIRECTIVES = [
    ng2_map_component_1.Ng2MapComponent, info_window_1.InfoWindow,
    marker_1.Marker, circle_1.Circle, custom_marker_1.CustomMarker, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer,
    drawing_manager_1.DrawingManager,
];
var Ng2MapModule = (function () {
    function Ng2MapModule() {
    }
    Ng2MapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        console.debug('Ng2MapModule config', config);
        return {
            ngModule: Ng2MapModule,
            providers: [
                { provide: config_1.NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    Ng2MapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: COMPONENTS_DIRECTIVES,
                    exports: [COMPONENTS_DIRECTIVES],
                    providers: [
                        geo_coder_1.GeoCoder,
                        navigator_geolocation_1.NavigatorGeolocation,
                        ng2_map_1.Ng2Map,
                        option_builder_1.OptionBuilder
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2MapModule.ctorParameters = [];
    return Ng2MapModule;
}());
exports.Ng2MapModule = Ng2MapModule;
//# sourceMappingURL=ng2-map.module.js.map