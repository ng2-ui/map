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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var option_builder_1 = require("../services/option-builder");
var navigator_geolocation_1 = require("../services/navigator-geolocation");
var geo_coder_1 = require("../services/geo-coder");
var ng2_map_1 = require("../services/ng2-map");
var api_loader_1 = require("../services/api-loader");
var Subject_1 = require("rxjs/Subject");
var debounceTime_1 = require("rxjs/operator/debounceTime");
var util_1 = require("../services/util");
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
    function Ng2MapComponent(optionBuilder, elementRef, geolocation, geoCoder, ng2Map, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.ng2Map = ng2Map;
        this.apiLoader = apiLoader;
        this.mapReady$ = new core_1.EventEmitter();
        this.mapOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    Ng2MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoader.api$.subscribe(function () { return _this.initializeMap(); });
    };
    Ng2MapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
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
                _this.mapIdledOnce = true;
                setTimeout(function () {
                    _this.mapReady$.emit(_this.map);
                });
            }
        });
        // update map when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
        if (typeof window !== 'undefined' && window['ng2MapRef']) {
            // expose map object for test and debugging on (<any>window)
            window['ng2MapRef'].map = this.map;
        }
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
        if (this.map && this.map[groupName]) {
            var index = this.map[groupName].indexOf(mapObject);
            console.log('index', mapObject, index);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    return Ng2MapComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2MapComponent.prototype, "mapReady$", void 0);
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
    __metadata("design:paramtypes", [option_builder_1.OptionBuilder,
        core_1.ElementRef,
        navigator_geolocation_1.NavigatorGeolocation,
        geo_coder_1.GeoCoder,
        ng2_map_1.Ng2Map,
        api_loader_1.NgMapApiLoader])
], Ng2MapComponent);
exports.Ng2MapComponent = Ng2MapComponent;
//# sourceMappingURL=ng2-map.component.js.map