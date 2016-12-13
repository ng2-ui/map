"use strict";
var core_1 = require('@angular/core');
var option_builder_1 = require('../services/option-builder');
var ng2_map_component_1 = require('../components/ng2-map.component');
var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.place_changed = new core_1.EventEmitter();
        this.initialized$ = new core_1.EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            console.log('places autocomplete options', _this.objectOptions);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            console.log('this.autocomplete', _this.autocomplete);
            _this.autocomplete.addListener('place_changed', function (place) { return _this.place_changed.emit(); });
            _this.initialized$.emit(_this.autocomplete);
        };
        if (typeof google === 'undefined' || !google.maps.Map) {
            this.addGoogleMapsApi();
        }
        else {
            this.initialize();
        }
    }
    PlacesAutoComplete.prototype.addGoogleMapsApi = function () {
        window['initializePlacesAutoComplete'] = this.initialize;
        if (!window['google'] && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = ng2_map_component_1.Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
            script.src = apiUrl + 'callback=initializePlacesAutoComplete';
            document.querySelector('body').appendChild(script);
        }
    };
    PlacesAutoComplete.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[places-auto-complete]'
                },] },
    ];
    /** @nocollapse */
    PlacesAutoComplete.ctorParameters = [
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
    ];
    PlacesAutoComplete.propDecorators = {
        'bounds': [{ type: core_1.Input, args: ['bounds',] },],
        'componentRestrictions': [{ type: core_1.Input, args: ['componentRestrictions',] },],
        'types': [{ type: core_1.Input, args: ['types',] },],
        'place_changed': [{ type: core_1.Output, args: ['place_changed',] },],
        'initialized$': [{ type: core_1.Output, args: ['initialized$',] },],
    };
    return PlacesAutoComplete;
}());
exports.PlacesAutoComplete = PlacesAutoComplete;
//# sourceMappingURL=places-auto-complete.js.map