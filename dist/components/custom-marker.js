"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var ng2_map_1 = require('../services/ng2-map');
var ng2_map_component_1 = require('./ng2-map.component');
var INPUTS = [
    'position'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    //to avoid DOM event conflicts
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = (function (_super) {
        __extends(CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            _super.call(this);
            this.visible = true;
            this.htmlEl = htmlEl;
            this.position = position;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        CustomMarkerOverlayView.prototype.setPosition = function (position) {
            var _this = this;
            var _setPosition = function (latLng) {
                var posPixel = _this.getProjection().fromLatLngToDivPixel(latLng);
                var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                var y = Math.round(posPixel.y - (_this.htmlEl.offsetHeight / 2));
                _this.htmlEl.style.left = x + 'px';
                _this.htmlEl.style.top = y + 'px';
                _this.htmlEl.style.visibility = 'visible';
            };
            if (typeof position === 'string') {
                // geocode it
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: position }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        console.log('setting custom marker position from address', position);
                        _setPosition(results[0].geometry.location);
                    }
                    else {
                    }
                });
            }
            else {
                // assume array format [lat, lng]
                var latLng = new google.maps.LatLng(position[0], position[1]);
                _setPosition(latLng);
            }
        };
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        ;
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = (function () {
    function CustomMarker(ng2MapComponent, elementRef, ng2Map) {
        var _this = this;
        this.ng2MapComponent = ng2MapComponent;
        this.elementRef = elementRef;
        this.ng2Map = ng2Map;
        this.inputChanges$ = new Subject_1.Subject();
        this.initialized$ = new core_1.EventEmitter();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ng2MapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        var _this = this;
        this.ng2MapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
            this.mapObject.setMap(null);
            delete this.mapObject;
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        console.log('custom-marker is being initialized');
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.ng2MapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.ng2Map.setObjectEvents(OUTPUTS, this, 'mapObject');
        // update object when input changes
        this.inputChanges$
            .debounceTime(1000)
            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.mapObject, changes); });
        this.ng2MapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    CustomMarker.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-map > custom-marker',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    CustomMarker.ctorParameters = [
        { type: ng2_map_component_1.Ng2MapComponent, },
        { type: core_1.ElementRef, },
        { type: ng2_map_1.Ng2Map, },
    ];
    return CustomMarker;
}());
exports.CustomMarker = CustomMarker;
//# sourceMappingURL=custom-marker.js.map