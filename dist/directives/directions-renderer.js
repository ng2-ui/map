"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var navigator_geolocation_1 = require("../services/navigator-geolocation");
var INPUTS = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS = ['directions_changed'];
var DirectionsRenderer = (function (_super) {
    __extends(DirectionsRenderer, _super);
    function DirectionsRenderer(ng2MapComponent, geolocation) {
        _super.call(this, ng2MapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS);
        this.geolocation = geolocation;
    }
    // only called when map is ready
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log('DirectionsRenderer', 'initialization options', this.objectOptions, this.directionsRequest);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.ng2MapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.ng2Map.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var newOptions = {};
        for (var key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > directions-renderer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DirectionsRenderer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: navigator_geolocation_1.NavigatorGeolocation, },
    ];
    DirectionsRenderer.propDecorators = {
        'directionsRequest': [{ type: core_1.Input, args: ['directions-request',] },],
    };
    return DirectionsRenderer;
}(base_map_directive_1.BaseMapDirective));
exports.DirectionsRenderer = DirectionsRenderer;
//# sourceMappingURL=directions-renderer.js.map