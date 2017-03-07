"use strict";
var core_1 = require('@angular/core');
var option_builder_1 = require('./option-builder');
var geo_coder_1 = require('./geo-coder');
/**
 * collection of map instance-related properties and methods
 */
var Ng2Map = (function () {
    function Ng2Map(geoCoder, optionBuilder) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                object[setMethodName](results[0].geometry.location);
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        object[setMethodName](val);
                    }
                }
            }
        };
    }
    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return ("_" + $1.toLowerCase()); }) //positionChanged -> position_changed
                .replace(/^map_/, ''); //map_click -> click  to avoid DOM conflicts
            thisObj[prefix].addListener(eventName, function (event) {
                var param = event ? event : {};
                param.target = this;
                thisObj[definedEvent].emit(param);
            });
        });
    };
    Ng2Map.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2Map.ctorParameters = [
        { type: geo_coder_1.GeoCoder, },
        { type: option_builder_1.OptionBuilder, },
    ];
    return Ng2Map;
}());
exports.Ng2Map = Ng2Map;
//# sourceMappingURL=ng2-map.js.map