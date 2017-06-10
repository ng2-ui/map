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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_loader_1 = require("../services/api-loader");
var option_builder_1 = require("../services/option-builder");
var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new core_1.EventEmitter();
        this.initialized$ = new core_1.EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
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
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PlacesAutoComplete.prototype, "initialized$", void 0);
PlacesAutoComplete = __decorate([
    core_1.Directive({
        selector: '[places-auto-complete]'
    }),
    __metadata("design:paramtypes", [option_builder_1.OptionBuilder,
        core_1.ElementRef,
        api_loader_1.NgMapApiLoader])
], PlacesAutoComplete);
exports.PlacesAutoComplete = PlacesAutoComplete;
//# sourceMappingURL=places-auto-complete.js.map