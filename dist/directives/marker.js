"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var option_builder_1 = require('../services/option-builder');
var navigator_geolocation_1 = require('../services/navigator-geolocation');
var geo_coder_1 = require('../services/geo-coder');
var ng2_map_1 = require('../services/ng2-map');
var base_map_directive_1 = require('./base-map-directive');
var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'dhapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(ng2Map, optionBuilder, geolocation, geoCoder) {
        _super.call(this, ng2Map, optionBuilder, INPUTS, OUTPUTS);
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.objectOptions = {};
    }
    Marker.prototype.initialize = function (map) {
        _super.prototype.initialize.call(this, map);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting marker position from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // console.log('this.marker', this.marker);
                _this.mapObject.setPosition(latLng);
            });
        }
        else if (typeof this['position'] === 'string') {
            this.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                console.log('setting marker position from address', _this['position']);
                // console.log('this.marker', this.marker);
                _this.mapObject.setPosition(results[0].geometry.location);
            });
        }
    };
    Marker = __decorate([
        core_1.Directive({
            selector: 'ng2-map>marker',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }), 
        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder])
    ], Marker);
    return Marker;
}(base_map_directive_1.BaseMapDirective));
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map