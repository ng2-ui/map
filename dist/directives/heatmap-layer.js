"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = (function (_super) {
    __extends(HeatmapLayer, _super);
    function HeatmapLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.libraryName = 'visualization';
    }
    HeatmapLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > heatmap-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    HeatmapLayer.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    HeatmapLayer.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return HeatmapLayer;
}(base_map_directive_1.BaseMapDirective));
exports.HeatmapLayer = HeatmapLayer;
//# sourceMappingURL=heatmap-layer.js.map