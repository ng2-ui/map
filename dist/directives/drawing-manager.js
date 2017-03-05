"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(ng2MapComp) {
        _super.call(this, ng2MapComp, 'DrawingManager', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.libraryName = 'drawing';
    }
    DrawingManager.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > drawing-manager',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DrawingManager.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    DrawingManager.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return DrawingManager;
}(base_map_directive_1.BaseMapDirective));
exports.DrawingManager = DrawingManager;
//# sourceMappingURL=drawing-manager.js.map