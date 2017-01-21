"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = (function (_super) {
    __extends(TrafficLayer, _super);
    function TrafficLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'TrafficLayer', INPUTS, OUTPUTS);
    }
    TrafficLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > traffic-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TrafficLayer.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    return TrafficLayer;
}(base_map_directive_1.BaseMapDirective));
exports.TrafficLayer = TrafficLayer;
//# sourceMappingURL=traffic-layer.js.map