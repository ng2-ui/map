"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = (function (_super) {
    __extends(BicyclingLayer, _super);
    function BicyclingLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, INPUTS, OUTPUTS);
    }
    BicyclingLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > bicycling-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    BicyclingLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    return BicyclingLayer;
}(base_map_directive_1.BaseMapDirective));
exports.BicyclingLayer = BicyclingLayer;
//# sourceMappingURL=bicycling-layer.js.map