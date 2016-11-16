"use strict";
var core_1 = require('@angular/core');
var BaseMapDirective = (function () {
    function BaseMapDirective(ng2Map, optionBuilder, inputs, outputs) {
        var _this = this;
        this.ng2Map = ng2Map;
        this.optionBuilder = optionBuilder;
        this.inputs = inputs;
        this.outputs = outputs;
        this.outputs.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
        this.mapObjectName = this.constructor['name'];
    }
    // Initialize this map object when map is ready
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
    };
    // called when map is ready
    BaseMapDirective.prototype.initialize = function (map) {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps[this.mapObjectName](Object.assign({}, this.objectOptions, { map: map }));
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
    };
    // When input is changed, update object too.
    // e.g., when map center is changed by user, update center on the map
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        console.log(this.mapObjectName, 'objectOptions are changed', changes);
        this.ng2Map.updateGoogleObject(this.mapObject, changes);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    BaseMapDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.mapObject) {
            this.outputs.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
            delete this.mapObject['setMap'](null);
            delete this.mapObject;
        }
    };
    return BaseMapDirective;
}());
exports.BaseMapDirective = BaseMapDirective;
//# sourceMappingURL=base-map-directive.js.map