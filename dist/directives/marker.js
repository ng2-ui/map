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
var option_builder_1 = require("../services/option-builder");
var navigator_geolocation_1 = require("../services/navigator-geolocation");
var geo_coder_1 = require("../services/geo-coder");
var ng2_map_1 = require("../services/ng2-map");
var Rx_1 = require("rxjs/Rx");
var INPUTS = "\n  anchorPoint, animation, clickable, cursor, draggable, icon, label, opacity\n  ,optimized,place, position, shape, title, visible, zIndex".split(',').map(function (el) { return el.trim(); });
var OUTPUTS = "\n  animation_changed, click, clickable_changed, cursor_changed, dblclick, drag, dragend, draggable_changed,\n  dragstart, flat_changed, icon_changed, mousedown, mouseout, mouseover, mouseup, position_changed, rightclick,\n  shape_changed, title_changed, visible_changed, zindex_changed\n  ".split(',').map(function (el) { return ("marker" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
var Marker = (function () {
    function Marker(ng2Map, optionBuilder, geolocation, geoCoder) {
        var _this = this;
        this.ng2Map = ng2Map;
        this.optionBuilder = optionBuilder;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.options = {};
        this.inputChanges$ = new Rx_1.Subject();
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    Marker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    Marker.prototype.initialize = function (map) {
        var _this = this;
        console.log('marker is being initialized');
        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('MARKER options', this.options);
        this.options.map = map;
        // will be set after geocoded
        typeof this.options.position === 'string' && (delete this.options.position);
        this.marker = new google.maps.Marker(this.options);
        this.setPosition();
        //set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'marker');
        // update marker when input changes
        this.inputChanges$
            .subscribe(function (changes) {
            console.log('marker options are changed', changes);
            _this.ng2Map.updateGoogleObject(_this.marker, changes);
        });
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this['position']) {
                _this.geolocation.getCurrentPosition().subscribe(function (position) {
                    console.log('setting marker position from current location');
                    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    //console.log('this.marker', this.marker);
                    _this.marker.setPosition(latLng);
                });
            }
            else if (typeof _this['position'] === 'string') {
                _this.geoCoder.geocode({ address: _this['position'] }).subscribe(function (results) {
                    console.log('setting marker position from address', _this['position']);
                    //console.log('this.marker', this.marker);
                    _this.marker.setPosition(results[0].geometry.location);
                });
            }
        }, 500);
    };
    Marker.prototype.ngOnDestroy = function () {
        var _this = this;
        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.marker, output); });
        delete this.marker.setMap(null);
        delete this.marker;
    };
    Marker = __decorate([
        core_1.Directive({
            selector: 'marker',
            inputs: INPUTS,
            outputs: OUTPUTS
        }), 
        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder])
    ], Marker);
    return Marker;
}());
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map