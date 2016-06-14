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
var core_1 = require('@angular/core');
var option_builder_1 = require("../services/option-builder");
var ng2_map_1 = require("../services/ng2-map");
var Rx_1 = require("rxjs/Rx");
var INPUTS = "\n  content, disableAutoPan, maxWidth, pixelOffset, position, zIndex\n  ".split(',').map(function (el) { return el.trim(); });
var OUTPUTS = "\n  closeclick, content_changed, domready, position_changed, zindex_changed\n  ".split(',').map(function (el) { return ("infoWindow" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
var InfoWindow = (function () {
    function InfoWindow(optionBuilder, elementRef, ng2Map) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.options = {};
        this.inputChanges$ = new Rx_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    InfoWindow.prototype.initialize = function (map) {
        var _this = this;
        console.log('infowindow is being initialized');
        this.template = this.elementRef.nativeElement.innerHTML;
        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.options);
        console.log('INFOWINDOW options', this.options);
        //register infoWindow ids to Ng2Map, so that it can be opened by id
        this.el = this.elementRef.nativeElement;
        if (this.el.id) {
            this.ng2Map.mapComponent.infoWindows[this.el.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        //set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        this.inputChanges$
            .debounceTime(1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.infoWindow, changes); });
    };
    InfoWindow.prototype.open = function (anchor, data) {
        var html = this.template;
        for (var key in data) {
            this[key] = data[key];
            html = html.replace("[[" + key + "]]", data[key]);
        }
        //set content and open it
        this.infoWindow.setContent(html);
        this.infoWindow.open(this.ng2Map.map, anchor);
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        var _this = this;
        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.infoWindow, output); });
        delete this.infoWindow;
    };
    InfoWindow = __decorate([
        core_1.Component({
            selector: 'info-window',
            inputs: INPUTS,
            outputs: OUTPUTS,
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, ng2_map_1.Ng2Map])
    ], InfoWindow);
    return InfoWindow;
}());
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map