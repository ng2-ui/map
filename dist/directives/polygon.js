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
var ng2_map_1 = require('../services/ng2-map');
var Subject_1 = require('rxjs/Subject');
var INPUTS = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex'
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polygon = (function () {
    function Polygon(ng2Map, optionBuilder) {
        var _this = this;
        this.ng2Map = ng2Map;
        this.optionBuilder = optionBuilder;
        this.options = {};
        this.inputChanges$ = new Subject_1.Subject();
        // all outputs needs to be initialized, http://stackoverflow.com/questions/37765519
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    Polygon.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
    };
    Polygon.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    Polygon.prototype.initialize = function (map) {
        var _this = this;
        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        console.log('Polygon initialization options', this.options.paths);
        //noinspection TypeScriptUnresolvedFunction
        this.polygon = new google.maps.Polygon(Object.assign({}, this.options, { map: map }));
        this.polygon['mapObjectName'] = this.constructor['name'];
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'polygon');
        // update pologon when input changes
        this.inputChanges$.subscribe(function (changes) {
            console.log('polygon options are changed', changes);
            _this.ng2Map.updateGoogleObject(_this.polygon, changes);
        });
    };
    Polygon.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.polygon) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.polygon, output); });
            delete this.polygon.setMap(null);
            delete this.polygon;
        }
    };
    Polygon = __decorate([
        core_1.Directive({
            selector: 'ng2-map>polygon',
            inputs: INPUTS,
            outputs: OUTPUTS,
        }), 
        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder])
    ], Polygon);
    return Polygon;
}());
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map