"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(ng2MapComp) {
        _super.call(this, ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS);
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.ng2MapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    GroundOverlay.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > ground-overlay',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    GroundOverlay.ctorParameters = function () { return [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ]; };
    GroundOverlay.propDecorators = {
        'initialized$': [{ type: core_1.Output },],
    };
    return GroundOverlay;
}(base_map_directive_1.BaseMapDirective));
exports.GroundOverlay = GroundOverlay;
//# sourceMappingURL=ground-overlay.js.map