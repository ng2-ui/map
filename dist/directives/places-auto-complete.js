"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../services/config");
var option_builder_1 = require("../services/option-builder");
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
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js?libraries=places' };
        // treat this as nguiMap because it requires google api on root level
        window['nguiMapRef'] = window['nguiMapRef'] || [];
        this.mapIndex = window['nguiMapRef'].length;
        window['nguiMapRef'].push({
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
        window['initNguiMap'] = window['initNguiMap'] || function () {
            window['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            window['nguiMapRef'] = [];
        };
        if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
            var apiUrl = this.config.apiUrl;
            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
            script.src = apiUrl + 'callback=initNguiMap';
            document.querySelector('body').appendChild(script);
        }
    };
    return PlacesAutoComplete;
}());
__decorate([
    core_1.Input('bounds'),
    __metadata("design:type", Object)
], PlacesAutoComplete.prototype, "bounds", void 0);
__decorate([
    core_1.Input('componentRestrictions'),
    __metadata("design:type", Object)
], PlacesAutoComplete.prototype, "componentRestrictions", void 0);
__decorate([
    core_1.Input('types'),
    __metadata("design:type", Array)
], PlacesAutoComplete.prototype, "types", void 0);
__decorate([
    core_1.Output('place_changed'),
    __metadata("design:type", core_1.EventEmitter)
], PlacesAutoComplete.prototype, "place_changed", void 0);
__decorate([
    core_1.Output('initialized$'),
    __metadata("design:type", core_1.EventEmitter)
], PlacesAutoComplete.prototype, "initialized$", void 0);
PlacesAutoComplete = __decorate([
    core_1.Directive({
        selector: '[places-auto-complete]'
    }),
    __param(3, core_1.Optional()), __param(3, core_1.Inject(config_1.NG_MAP_CONFIG_TOKEN)),
    __metadata("design:paramtypes", [option_builder_1.OptionBuilder,
        core_1.ElementRef,
        core_1.NgZone, Object])
], PlacesAutoComplete);
exports.PlacesAutoComplete = PlacesAutoComplete;
//# sourceMappingURL=places-auto-complete.js.map