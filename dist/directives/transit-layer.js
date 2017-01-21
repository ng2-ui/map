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
var TransitLayer = (function (_super) {
    __extends(TransitLayer, _super);
    function TransitLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'TransitLayer', INPUTS, OUTPUTS);
    }
    TransitLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > transit-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TransitLayer.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    return TransitLayer;
}(base_map_directive_1.BaseMapDirective));
exports.TransitLayer = TransitLayer;
//# sourceMappingURL=transit-layer.js.map