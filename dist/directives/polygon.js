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
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(ng2MapComp) {
        _super.call(this, ng2MapComp, INPUTS, OUTPUTS);
    }
    Polygon.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map>polygon',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    Polygon.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    return Polygon;
}(base_map_directive_1.BaseMapDirective));
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map