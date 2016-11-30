"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = (function (_super) {
    __extends(KmlLayer, _super);
    function KmlLayer(ng2MapComp) {
        _super.call(this, ng2MapComp, 'KmlLayer', INPUTS, OUTPUTS);
    }
    KmlLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > kml-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    KmlLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    return KmlLayer;
}(base_map_directive_1.BaseMapDirective));
exports.KmlLayer = KmlLayer;
//# sourceMappingURL=kml-layer.js.map