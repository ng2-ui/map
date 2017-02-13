"use strict";
var core_1 = require('@angular/core');
var option_builder_1 = require('../services/option-builder');
var navigator_geolocation_1 = require('../services/navigator-geolocation');
var config_1 = require('../services/config');
var geo_coder_1 = require('../services/geo-coder');
var ng2_map_1 = require('../services/ng2-map');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
var util_1 = require('../services/util');
var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
    'options',
    // ng2-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var Ng2MapComponent = (function () {
    function Ng2MapComponent(optionBuilder, elementRef, zone, geolocation, geoCoder, ng2Map, config) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.zone = zone;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.ng2Map = ng2Map;
        this.config = config;
        this.mapReady$ = new core_1.EventEmitter();
        this.mapOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
        window['ng2MapRef'] = { zone: this.zone, componentFn: function () { return _this.initializeMap(); }, map: null };
        if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
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
        window['initNg2Map'] = function () {
            window['ng2MapRef'].zone.run(function () { window['ng2MapRef'].componentFn(); });
        };
        if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = this.config.apiUrl;
            apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
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
        this.map['mapObjectName'] = 'Ng2MapComponent';
        if (!this.mapOptions.center) {
            this.setCenter();
        }
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
        this.map.addListener('idle', function () {
            if (!_this.mapIdledOnce) {
                _this.mapReady$.emit(_this.map);
                _this.mapIdledOnce = true;
            }
        });
        // update map when input changes
        this.inputChanges$
            .debounceTime(1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
        // expose map object for test and debugging on window
        window['ng2MapRef'].map = this.map;
    };
    Ng2MapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                console.log('setting map center from current location');
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ng2-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                console.log('setting map center from address', _this['center']);
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
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
    // map.markers, map.circles, map.heatmapLayers.. etc
    Ng2MapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    Ng2MapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        var index = this.map[groupName].indexOf(mapObject);
        console.log('index', mapObject, index);
        (index > -1) && this.map[groupName].splice(index, 1);
    };
    Ng2MapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map',
                    providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
                    styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    Ng2MapComponent.ctorParameters = [
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: navigator_geolocation_1.NavigatorGeolocation, },
        { type: geo_coder_1.GeoCoder, },
        { type: ng2_map_1.Ng2Map, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [config_1.NG_MAP_CONFIG_TOKEN,] },] },
    ];
    Ng2MapComponent.propDecorators = {
        'mapReady$': [{ type: core_1.Output },],
    };
    return Ng2MapComponent;
}());
exports.Ng2MapComponent = Ng2MapComponent;
//# sourceMappingURL=ng2-map.component.js.map