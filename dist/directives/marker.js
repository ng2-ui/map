"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    //ng2-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(ng2MapComp) {
        _super.call(this, ng2MapComp, 'Marker', INPUTS, OUTPUTS);
        this.ng2MapComp = ng2MapComp;
        this.objectOptions = {};
    }
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting marker position from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error(error);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['position'] === 'string') {
            this.ng2MapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                console.log('setting marker position from address', _this['position']);
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error(error);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    Marker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > marker',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Marker.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    return Marker;
}(base_map_directive_1.BaseMapDirective));
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map