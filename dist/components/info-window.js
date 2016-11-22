"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
var ng2_map_1 = require('../services/ng2-map');
var ng2_map_component_1 = require('./ng2-map.component');
var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'infoWindowCloseclick', 'infoWindowContentChanged', 'infoWindowDomready',
    'infoWindowPositionChanged', 'infoWindowZindexChanged'
];
var InfoWindow = (function () {
    function InfoWindow(ng2MapComponent, elementRef, ng2Map) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.objectOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        this.initialized$ = new core_1.EventEmitter();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2MapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
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
        this.objectOptions = this.ng2MapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = this.constructor['name'];
        console.log('INFOWINDOW objectOptions', this.objectOptions);
        // register infoWindow ids to Ng2Map, so that it can be opened by id
        this.el = this.elementRef.nativeElement;
        if (this.el.id) {
            this.ng2MapComponent.infoWindows[this.el.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        this.inputChanges$
            .debounceTime(1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.infoWindow, changes); });
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
        this.infoWindow.open(this.ng2MapComponent.map, anchor);
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.infoWindow) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.infoWindow, output); });
            delete this.infoWindow;
        }
    };
    InfoWindow.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map>info-window',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    InfoWindow.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: core_1.ElementRef, },
        { type: ng2_map_1.Ng2Map, },
    ];
    return InfoWindow;
}());
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map