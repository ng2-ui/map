"use strict";
var core_1 = require('@angular/core');
var BaseMapDirective = (function () {
    function BaseMapDirective(ng2MapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        this.initialized$ = new core_1.EventEmitter();
        this.ng2Map = this.ng2MapComponent['ng2Map'];
        this.optionBuilder = this.ng2MapComponent['optionBuilder'];
        //all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
        this.mapObjectName = mapObjectName;
    }
    // Initialize this map object when map is ready
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2MapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    // only called when map is ready
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        console.log(this.mapObjectName, 'initialization options', this.objectOptions);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.ng2MapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
        this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
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
        this.ng2MapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
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