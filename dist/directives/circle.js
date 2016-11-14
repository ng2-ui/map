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
var option_builder_1 = require('../services/option-builder');
var navigator_geolocation_1 = require('../services/navigator-geolocation');
var geo_coder_1 = require('../services/geo-coder');
var ng2_map_1 = require('../services/ng2-map');
var Subject_1 = require('rxjs/Subject');
var INPUTS = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex',
];
var OUTPUTS = [
    'circleCenterChanged', 'circleClick', 'circleDblclick', 'circleDrag', 'circleDragend', 'circleDragstart',
    'circleMousedown', 'circleMousemove', 'circleMouseout', 'circleMouseover', 'circleMouseup', 'circleRadiusChanged', 'circleRightclick',
];
var Circle = (function () {
    function Circle(ng2Map, optionBuilder, geolocation, geoCoder) {
        var _this = this;
        this.ng2Map = ng2Map;
        this.optionBuilder = optionBuilder;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.options = {};
        this.inputChanges$ = new Subject_1.Subject();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    Circle.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
    };
    Circle.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    Circle.prototype.initialize = function (map) {
        var _this = this;
        console.log('circle is being initialized');
        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('CIRCLE options', this.options);
        this.options.map = map;
        // will be set after geocoded
        typeof this.options.center === 'string' && (delete this.options.center);
        this.circle = new google.maps.Circle(this.options);
        this.circle['mapObjectName'] = this.constructor['name'];
        this.setCenter();
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'circle');
        // update circle when input changes
        this.inputChanges$
            .subscribe(function (changes) {
            console.log('circle options are changed', changes);
            _this.ng2Map.updateGoogleObject(_this.circle, changes);
        });
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (center) {
                console.log('setting circle center from current location');
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.circle.setCenter(latLng);
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting circle center from address', _this['center']);
                _this.circle.setCenter(results[0].geometry.location);
            });
        }
    };
    Circle.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.circle) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.circle, output); });
            delete this.circle.setMap(null);
            delete this.circle;
        }
    };
    Circle = __decorate([
        core_1.Directive({
            selector: 'ng2-map>circle',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }), 
        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder])
    ], Circle);
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map