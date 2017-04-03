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
var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(ng2MapComp) {
        var _this = _super.call(this, ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS) || this;
        _this.initialized$ = new core_1.EventEmitter();
        _this.objectOptions = {};
        return _this;
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        if (this.ng2MapComponent.loggingEnabled) {
            console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        }
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.ng2MapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return GroundOverlay;
}(base_map_directive_1.BaseMapDirective));
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GroundOverlay.prototype, "initialized$", void 0);
GroundOverlay = __decorate([
    core_1.Directive({
        selector: 'ng2-map > ground-overlay',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ng2_map_component_1.Ng2MapComponent])
], GroundOverlay);
exports.GroundOverlay = GroundOverlay;
//# sourceMappingURL=ground-overlay.js.map