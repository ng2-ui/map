"use strict";
var core_1 = require('@angular/core');
var config_1 = require('../services/config');
var option_builder_1 = require('../services/option-builder');
var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, zone, config) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.zone = zone;
        this.config = config;
        this.place_changed = new core_1.EventEmitter();
        this.initialized$ = new core_1.EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            console.log('places autocomplete options', _this.objectOptions);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            console.log('this.autocomplete', _this.autocomplete);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        this.config = this.config
            || { apiUrl: 'https://maps.google.com/maps/api/js?libraries=places' };
        //treat this as ng2Map because it requires google api on root level
        window['ng2MapRef'] = window['ng2MapRef'] || [];
        this.mapIndex = window['ng2MapRef'].length;
        window['ng2MapRef'].push({
            zone: this.zone,
            componentFn: function () { return _this.initialize(); }
        });
        if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
            this.addGoogleMapsApi();
        }
        else {
            this.initialize();
        }
    }
    PlacesAutoComplete.prototype.addGoogleMapsApi = function () {
        window['initNg2Map'] = window['initNg2Map'] || function () {
            window['ng2MapRef'].forEach(function (ng2MapRef) {
                ng2MapRef.zone.run(function () { ng2MapRef.componentFn(); });
            });
            window['ng2MapRef'] = [];
        };
        if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
            var script = document.createElement('script');
            script.id = 'ng2-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
            var apiUrl = this.config.apiUrl;
            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
            script.src = apiUrl + 'callback=initNg2Map';
            document.querySelector('body').appendChild(script);
        }
    };
    PlacesAutoComplete.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[places-auto-complete]'
                },] },
    ];
    /** @nocollapse */
    PlacesAutoComplete.ctorParameters = function () { return [
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [config_1.NG_MAP_CONFIG_TOKEN,] },] },
    ]; };
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