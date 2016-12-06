"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_map_directive_1 = require('./base-map-directive');
var ng2_map_component_1 = require('../components/ng2-map.component');
var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
var OUTPUTS = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = (function (_super) {
    __extends(DataLayer, _super);
    function DataLayer(ng2MapComponent) {
        _super.call(this, ng2MapComponent, 'Data', INPUTS, OUTPUTS);
    }
    // only called when map is ready
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            console.log('this.geoJson', this['geoJson']);
            this.ng2MapComponent.map.data.loadGeoJson(this['geoJson']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
            this.ng2MapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.ng2MapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.initialized$.emit(this.mapObject);
    };
    DataLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ng2-map > data-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DataLayer.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
    ];
    return DataLayer;
}(base_map_directive_1.BaseMapDirective));
exports.DataLayer = DataLayer;
//# sourceMappingURL=data-layer.js.map