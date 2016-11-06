"use strict";
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
    Circle.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map>circle',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Circle.ctorParameters = [
        { type: ng2_map_1.Ng2Map, },
        { type: option_builder_1.OptionBuilder, },
        { type: navigator_geolocation_1.NavigatorGeolocation, },
        { type: geo_coder_1.GeoCoder, },
    ];
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map