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
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ng2-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(ng2MapComp) {
        _super.call(this, ng2MapComp, 'Circle', INPUTS, OUTPUTS);
        this.ng2MapComp = ng2MapComp;
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                console.log('setting circle center from current location');
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ng2-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.ng2MapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting circle center from address', _this['center']);
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ng2-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    Circle.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map>circle, ng2-map>map-circle',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Circle.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    Circle.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return Circle;
}(base_map_directive_1.BaseMapDirective));
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map