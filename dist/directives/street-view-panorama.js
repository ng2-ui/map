"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var base_map_directive_1 = require("./base-map-directive");
var ng2_map_component_1 = require("../components/ng2-map.component");
var INPUTS = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(ng2MapComp) {
        var _this = _super.call(this, ng2MapComp, 'StreetViewPanorama', INPUTS, OUTPUTS) || this;
        _this.initialized$ = new core_1.EventEmitter();
        return _this;
    }
    // only called when map is ready
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        var element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.ng2MapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.ng2MapComponent.el) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
        }
    };
    return StreetViewPanorama;
}(base_map_directive_1.BaseMapDirective));
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StreetViewPanorama.prototype, "initialized$", void 0);
StreetViewPanorama = __decorate([
    core_1.Directive({
        selector: 'ng2-map > street-view-panorama',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ng2_map_component_1.Ng2MapComponent])
], StreetViewPanorama);
exports.StreetViewPanorama = StreetViewPanorama;
//# sourceMappingURL=street-view-panorama.js.map