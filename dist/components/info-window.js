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
var Subject_1 = require("rxjs/Subject");
var debounceTime_1 = require("rxjs/operator/debounceTime");
var ngui_map_1 = require("../services/ngui-map");
var ngui_map_component_1 = require("./ngui-map.component");
var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = (function () {
    function InfoWindow(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        console.log('infowindow is being initialized');
        this.template = this.elementRef.nativeElement.innerHTML;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        console.log('INFOWINDOW objectOptions', this.objectOptions);
        // register infoWindow ids to NguiMap, so that it can be opened by id
        this.el = this.elementRef.nativeElement;
        if (this.el.id) {
            this.nguiMapComponent.infoWindows[this.el.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); });
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    InfoWindow.prototype.open = function (anchor, data) {
        var html = this.template;
        for (var key in data) {
            this[key] = data[key];
            html = html.replace("[[" + key + "]]", data[key]);
        }
        // set content and open it
        this.infoWindow.setContent(html);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.infoWindow) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.infoWindow, output); });
            delete this.infoWindow;
        }
    };
    return InfoWindow;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InfoWindow.prototype, "initialized$", void 0);
InfoWindow = __decorate([
    core_1.Component({
        selector: 'ngui-map > info-window',
        inputs: INPUTS,
        outputs: OUTPUTS,
        template: "<ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent,
        core_1.ElementRef,
        ngui_map_1.NguiMap])
], InfoWindow);
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map