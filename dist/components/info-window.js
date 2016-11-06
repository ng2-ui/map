"use strict";
var core_1 = require('@angular/core');
var option_builder_1 = require('../services/option-builder');
var ng2_map_1 = require('../services/ng2-map');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex',
];
var OUTPUTS = [
    'infoWindowCloseclick', 'infoWindowContentChanged', 'infoWindowDomready', 'infoWindowPositionChanged', 'infoWindowZindexChanged',
];
var InfoWindow = (function () {
    function InfoWindow(optionBuilder, elementRef, ng2Map) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.options = {};
        this.inputChanges$ = new Subject_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2Map.map) {
            this.initialize(this.ng2Map.map);
        }
        else {
            this.ng2Map.mapReady$.subscribe(function (map) { return _this.initialize(map); });
        }
    };
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
        // register infoWindow ids to Ng2Map, so that it can be opened by id
        this.el = this.elementRef.nativeElement;
        if (this.el.id) {
            this.ng2Map.mapComponent.infoWindows[this.el.id] = this;
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
    };
    InfoWindow.prototype.open = function (anchor, data) {
        var html = this.template;
        for (var key in data) {
            this[key] = data[key];
            html = html.replace("[[" + key + "]]", data[key]);
        }
        // set content and open it
        this.infoWindow.setContent(html);
        this.infoWindow.open(this.ng2Map.map, anchor);
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
        { type: option_builder_1.OptionBuilder, },
        { type: core_1.ElementRef, },
        { type: ng2_map_1.Ng2Map, },
    ];
    return InfoWindow;
}());
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map