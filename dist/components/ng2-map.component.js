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
require('rxjs/add/operator/debounceTime');
var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
    'options'
];
var OUTPUTS = [
    'mapBoundsChanged', 'mapCenterChanged', 'mapClick', 'mapDblclick', 'mapDrag', 'mapDragend', 'mapDragstart', 'mapHeadingChanged', 'mapIdle',
    'mapTypeidChanged', 'mapMousemove', 'mapMouseout', 'mapMouseover', 'mapProjectionChanged', 'mapResize', 'mapRightclick',
    'mapTilesloaded', 'mapTileChanged', 'mapZoomChanged'
];
var Ng2MapComponent = (function () {
    function Ng2MapComponent(optionBuilder, elementRef, zone, geolocation, geoCoder, ng2Map) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.zone = zone;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.ng2Map = ng2Map;
        this.mapOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        // map objects by group
        this.infoWindows = {};
        if (typeof google === 'undefined' || !google.maps.Map) {
            this.mapInitPath = 1;
            this.addGoogleMapsApi();
        }
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    Ng2MapComponent.prototype.ngAfterViewInit = function () {
        if (this.mapInitPath !== 1) {
            this.initializeMap();
        }
    };
    Ng2MapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    Ng2MapComponent.prototype.addGoogleMapsApi = function () {
        var _this = this;
        window['ng2MapComponentRef'] = { zone: this.zone, componentFn: function () { return _this.initializeMap(); } };
        window['initNg2Map'] = function () {
            window['ng2MapComponentRef'].zone.run(function () { window['ng2MapComponentRef'].componentFn(); });
        };
        if (!window['google'] && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
            script.src = apiUrl + 'callback=initNg2Map';
            document.querySelector('body').appendChild(script);
        }
    };
    Ng2MapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('ng2-map mapOptions', this.mapOptions);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.map = new google.maps.Map(this.el, this.mapOptions);
        this.map['mapObjectName'] = this.constructor['name'];
        if (!this.mapOptions.center) {
            this.setCenter();
        }
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
        // broadcast map ready message
        this.ng2Map.map = this.map;
        this.ng2Map.mapComponent = this;
        this.ng2Map.map['mapComponent'] = this;
        // ........
        console.log('map is ready.......');
        this.ng2Map.mapReady$.next(this.map);
        // update map when input changes
        this.inputChanges$
            .debounceTime(1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
    };
    Ng2MapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting map center from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting map center from address', _this['center']);
                _this.map.setCenter(results[0].geometry.location);
            });
        }
    };
    Ng2MapComponent.prototype.openInfoWindow = function (id, anchor, data) {
        this.infoWindows[id].open(anchor, data);
    };
    Ng2MapComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.el) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.map, output); });
        }
    };
    Ng2MapComponent = __decorate([
        core_1.Component({
            selector: 'ng2-map',
            providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
            styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
            inputs: INPUTS,
            outputs: OUTPUTS,
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
        }), 
        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, core_1.NgZone, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder, ng2_map_1.Ng2Map])
    ], Ng2MapComponent);
    return Ng2MapComponent;
}());
exports.Ng2MapComponent = Ng2MapComponent;
//# sourceMappingURL=ng2-map.component.js.map