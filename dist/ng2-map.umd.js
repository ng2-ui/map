(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["ng2-map"] = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else
		root["ng2-map"] = factory(root["@angular/core"], root["@angular/common"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(2);
	var option_builder_1 = __webpack_require__(3);
	exports.OptionBuilder = option_builder_1.OptionBuilder;
	var geo_coder_1 = __webpack_require__(5);
	exports.GeoCoder = geo_coder_1.GeoCoder;
	var navigator_geolocation_1 = __webpack_require__(7);
	exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
	var ng2_map_1 = __webpack_require__(8);
	exports.Ng2Map = ng2_map_1.Ng2Map;
	var ng2_map_component_1 = __webpack_require__(9);
	exports.Ng2MapComponent = ng2_map_component_1.Ng2MapComponent;
	var marker_1 = __webpack_require__(10);
	exports.Marker = marker_1.Marker;
	var info_window_1 = __webpack_require__(11);
	exports.InfoWindow = info_window_1.InfoWindow;
	var Ng2MapModule = (function () {
	    function Ng2MapModule() {
	    }
	    Ng2MapModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow],
	            providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
	            exports: [ng2_map_component_1.Ng2MapComponent, marker_1.Marker, info_window_1.InfoWindow]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2MapModule);
	    return Ng2MapModule;
	}());
	exports.Ng2MapModule = Ng2MapModule;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var util_1 = __webpack_require__(4);
	var geo_coder_1 = __webpack_require__(5);
	/**
	 * change any object to google object options
	 * e.g. [1,2] -> new google.maps.LatLng(1,2);
	 */
	var OptionBuilder = (function () {
	    function OptionBuilder(geoCoder) {
	        this.geoCoder = geoCoder;
	    }
	    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
	        var _this = this;
	        var options = {};
	        definedInputs.forEach(function (input) {
	            if (userInputs[input] !== undefined) {
	                options[input] = _this.googlize(userInputs[input], { key: input });
	            }
	        });
	        return options;
	    };
	    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
	        options = options || {};
	        for (var key in inputs) {
	            var val = inputs[key];
	            // (non-strings are fully converted)
	            if (typeof val !== 'string') {
	                options[key] = val;
	            } // sometimes '0' needed to stay as it is
	            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
	                options[key] = this.googlize(val, { key: key });
	            }
	        } // for(var key in attrs)
	        return options;
	    };
	    OptionBuilder.prototype.googlize = function (input, options) {
	        options = options || {};
	        var output;
	        if (input === 'false' || input === false) {
	            output = false;
	        }
	        else if (input === '0' || input === 0) {
	            output = 0;
	        }
	        else {
	            output =
	                // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
	                this.getJSONParsed(input, options)
	                    || this.getAnyMapObject(input)
	                    || this.getAnyMapConstant(input, options)
	                    || this.getDateObject(input);
	        }
	        if (output instanceof Array) {
	            if (options['key'] === "bounds") {
	                output = new google.maps.LatLngBounds(output[0], output[1]);
	            }
	            else if (options['key'] === "icons") {
	                output = this.getMapIcons(output);
	            }
	        }
	        if (options['key'] && output instanceof Object) {
	            if (options['key'] === 'icon') {
	                output = this.getMarkerIcon(output);
	            }
	            else if (options['key'].match(/ControlOptions$/)) {
	                output = this.getMapControlOption(output);
	            }
	        }
	        return output;
	    };
	    OptionBuilder.prototype.getLatLng = function (input) {
	        var output;
	        if (input[0].constructor == Array) {
	            output = input.map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
	        }
	        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
	            output = new google.maps.LatLng(input[0], input[1]);
	        }
	        return output;
	    };
	    OptionBuilder.prototype.getJSONParsed = function (input, options) {
	        var output;
	        try {
	            output = util_1.getJSON(input);
	            if (output instanceof Array) {
	                // [{a:1}] : not lat/lng ones
	                if (output[0].constructor !== Object) {
	                    output = this.getLatLng(output);
	                }
	            }
	            else if (output === Object(output)) {
	                // check for nested hashes and convert to Google API options
	                var newOptions = options;
	                newOptions['doNotConverStringToNumber'] = true;
	                output = this.googlizeMultiple(output, newOptions);
	            }
	        }
	        catch (e) {
	        }
	        return output;
	    };
	    OptionBuilder.prototype.getAnyMapObject = function (input) {
	        var output;
	        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
	            try {
	                var exp = "new google.maps." + input;
	                output = eval(exp);
	            }
	            catch (e) { }
	        }
	        return output;
	    };
	    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
	        var output;
	        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
	            try {
	                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
	                output = google.maps[matches[1]][matches[2]];
	            }
	            catch (e) { }
	        }
	        else if (input.match(/^[A-Z]+$/)) {
	            try {
	                var capitalizedKey = options['key'].charAt(0).toUpperCase() +
	                    options['key'].slice(1);
	                output = google.maps[capitalizedKey][input];
	            }
	            catch (e) { }
	        }
	        return output;
	    };
	    /**
	     * streetviewControl, panControl, etc, not a general control
	     */
	    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
	        var newControlOptions = controlOptions;
	        for (var key in newControlOptions) {
	            if (newControlOptions[key]) {
	                var value = newControlOptions[key];
	                if (typeof value === 'string') {
	                    value = value.toUpperCase();
	                }
	                else if (key === "mapTypeIds") {
	                    value = value.map(function (str) {
	                        if (str.match(/^[A-Z]+$/)) {
	                            return google.maps.MapTypeId[str.toUpperCase()];
	                        }
	                        else {
	                            return str;
	                        }
	                    });
	                }
	                if (key === "style") {
	                    var objName = key.replace(/Options$/, '') + "Style";
	                    newControlOptions[key] = google.maps[objName][value];
	                }
	                else if (key === "position") {
	                    newControlOptions[key] = google.maps.ControlPosition[value];
	                }
	                else {
	                    newControlOptions[key] = value;
	                }
	            }
	        }
	        return newControlOptions;
	    };
	    OptionBuilder.prototype.getDateObject = function (input) {
	        var output;
	        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
	            try {
	                output = new Date(input);
	            }
	            catch (e) { }
	        }
	        return output;
	    };
	    OptionBuilder.prototype.getMapIcons = function (input) {
	        return input.map(function (el) {
	            if (el.icon.path.match(/^[A-Z_]+$/)) {
	                el.icon.path = google.maps.SymbolPath[el.icon.path];
	            }
	            return el;
	        });
	    };
	    OptionBuilder.prototype.getMarkerIcon = function (input) {
	        var output = input;
	        if (("" + output.path).match(/^[A-Z_]+$/)) {
	            output.path = google.maps.SymbolPath[output.path];
	        }
	        for (var key in output) {
	            var arr = output[key];
	            if (key == "anchor" || key == "origin" || key == "labelOrigin") {
	                output[key] = new google.maps.Point(arr[0], arr[1]);
	            }
	            else if (key == "size" || key == "scaledSize") {
	                output[key] = new google.maps.Size(arr[0], arr[1]);
	            }
	        }
	        return output;
	    };
	    OptionBuilder = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [geo_coder_1.GeoCoder])
	    ], OptionBuilder);
	    return OptionBuilder;
	}());
	exports.OptionBuilder = OptionBuilder;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * return json string from json-like string
	 */
	var jsonize = function (str) {
	    try {
	        JSON.parse(str);
	        return str;
	    }
	    catch (e) {
	        return str
	            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
	        function (_, $1) {
	            return '"' + $1 + '":';
	        })
	            .replace(/'([^']+)'/g, // replacing single quote to double quote
	        function (_, $1) {
	            return '"' + $1 + '"';
	        });
	    }
	};
	exports.jsonize = jsonize;
	/**
	 * Returns string to an object by using JSON.parse()
	 */
	var getJSON = function (input) {
	    if (typeof input === 'string') {
	        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; //lat,lng
	        if (input.match(re)) {
	            input = "[" + input + "]";
	        }
	        return JSON.parse(jsonize(input));
	    }
	    else {
	        return input;
	    }
	};
	exports.getJSON = getJSON;
	/* tslint:enable */


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var Rx_1 = __webpack_require__(6);
	/**
	 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
	 *   service for Google Geocoder service
	 */
	var GeoCoder = (function () {
	    function GeoCoder() {
	    }
	    GeoCoder.prototype.geocode = function (options) {
	        var geocode$ = new Rx_1.Subject();
	        var geocoder = new google.maps.Geocoder();
	        geocoder.geocode(options, function (results, status) {
	            if (status == google.maps.GeocoderStatus.OK) {
	                geocode$.next(results);
	            }
	            else {
	                geocode$.error(results);
	            }
	        });
	        return geocode$;
	    };
	    ;
	    GeoCoder = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], GeoCoder);
	    return GeoCoder;
	}());
	exports.GeoCoder = GeoCoder;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var Rx_1 = __webpack_require__(6);
	/**
	 *  service for navigator.geolocation methods
	 */
	var NavigatorGeolocation = (function () {
	    function NavigatorGeolocation() {
	    }
	    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
	        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
	        var getCurrentPosition$ = new Rx_1.Subject();
	        if (navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition(function (position) {
	                getCurrentPosition$.next(position);
	            }, function (evt) {
	                getCurrentPosition$.error(evt);
	            }, geoLocationOptions);
	        }
	        else {
	            getCurrentPosition$.error("Browser Geolocation service failed.");
	        }
	        return getCurrentPosition$;
	    };
	    ;
	    NavigatorGeolocation = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NavigatorGeolocation);
	    return NavigatorGeolocation;
	}());
	exports.NavigatorGeolocation = NavigatorGeolocation;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var Rx_1 = __webpack_require__(6);
	var option_builder_1 = __webpack_require__(3);
	var geo_coder_1 = __webpack_require__(5);
	/**
	 * collection of map instance-related properties and methods
	 */
	var Ng2Map = (function () {
	    function Ng2Map(geoCoder, optionBuilder) {
	        this.geoCoder = geoCoder;
	        this.optionBuilder = optionBuilder;
	        this.mapReady$ = new Rx_1.Subject();
	    }
	    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
	        definedEvents.forEach(function (definedEvent) {
	            var eventName = definedEvent
	                .toLowerCase()
	                .replace(new RegExp("^" + prefix), '');
	            thisObj[prefix].addListener(eventName, function (event) {
	                thisObj[definedEvent].emit(this);
	            });
	        });
	    };
	    Ng2Map.prototype.updateGoogleObject = function (object, changes) {
	        var val, currentValue, setMethodName;
	        if (object) {
	            for (var key in changes) {
	                setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
	                currentValue = changes[key].currentValue;
	                if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
	                    this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
	                        object[setMethodName](results[0].geometry.location);
	                    });
	                }
	                else {
	                    val = this.optionBuilder.googlize(currentValue);
	                    object[setMethodName](val);
	                }
	            }
	        }
	    };
	    Ng2Map.prototype.updateProperty = function (object, key, currentValue) {
	        var val, setMethodName;
	        setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
	        if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
	            this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
	                object[setMethodName](results[0].geometry.location);
	            });
	        }
	        else {
	            val = this.optionBuilder.googlize(currentValue);
	            object[setMethodName](val);
	        }
	    };
	    Ng2Map = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [geo_coder_1.GeoCoder, option_builder_1.OptionBuilder])
	    ], Ng2Map);
	    return Ng2Map;
	}());
	exports.Ng2Map = Ng2Map;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var option_builder_1 = __webpack_require__(3);
	var navigator_geolocation_1 = __webpack_require__(7);
	var geo_coder_1 = __webpack_require__(5);
	var ng2_map_1 = __webpack_require__(8);
	var Rx_1 = __webpack_require__(6);
	var INPUTS = "\n  backgroundColor, center, disableDefaultUI, disableDoubleClickZoom, draggable, draggableCursor,\n  draggingCursor, heading, keyboardShortcuts, mapMaker, mapTypeControl, mapTypeId, maxZoom, minZoom,\n  noClear, overviewMapControl, panControl, panControlOptions, rotateControl, scaleControl, scrollwheel,\n  streetView, styles, tilt, zoom, streetViewControl, zoomControl, mapTypeControlOptions,\n  overviewMapControlOptions, rotateControlOptions, scaleControlOptions, streetViewControlOptions,\n  zoomControlOptions".split(',').map(function (el) { return el.trim(); });
	var OUTPUTS = "\n  bounds_changed, center_changed, click, dblclick, drag, dragend, dragstart, heading_changed, idle\n  maptypeid_changed, mousemove, mouseout, mouseover, projection_changed, resize, rightclick, \n  tilesloaded, tile_changed, zoom_changed"
	    .split(',').map(function (el) { return ("map" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
	var Ng2MapComponent = (function () {
	    function Ng2MapComponent(optionBuilder, elementRef, zone, geolocation, geoCoder, ng2Map) {
	        var _this = this;
	        this.optionBuilder = optionBuilder;
	        this.elementRef = elementRef;
	        this.zone = zone;
	        this.geolocation = geolocation;
	        this.geoCoder = geoCoder;
	        this.ng2Map = ng2Map;
	        this.mapOptions = {};
	        this.inputChanges$ = new Rx_1.Subject();
	        //map objects by group
	        this.infoWindows = {};
	        if (typeof google === 'undefined' || !google.maps.Map) {
	            this.mapInitPath = 1;
	            this.addGoogleMapsApi();
	        }
	        // all outputs needs to be initialized,
	        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
	        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
	    }
	    Ng2MapComponent.prototype.ngAfterViewInit = function () {
	        if (this.mapInitPath !== 1) {
	            this.initializeMap();
	        }
	    };
	    Ng2MapComponent.prototype.ngOnChanges = function (changes) {
	        this.inputChanges$.next(changes);
	    };
	    Ng2MapComponent.prototype.addGoogleMapsApi = function () {
	        var _this = this;
	        window['ng2MapComponentRef'] = { zone: this.zone, componentFn: function () { return _this.initializeMap(); } };
	        window['initNg2Map'] = function () {
	            window['ng2MapComponentRef'].zone.run(function () { window['ng2MapComponentRef'].componentFn(); });
	        };
	        if (!window['google'] && !document.querySelector('#ng2-map-api')) {
	            var script = document.createElement('script');
	            script.id = "ng2-map-api";
	            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
	            var apiUrl = Ng2MapComponent['apiUrl'] || "https://maps.google.com/maps/api/js";
	            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
	            script.src = apiUrl + "callback=initNg2Map";
	            document.querySelector('body').appendChild(script);
	        }
	    };
	    Ng2MapComponent.prototype.initializeMap = function () {
	        var _this = this;
	        this.el = this.elementRef.nativeElement.querySelector('.google-map');
	        console.log('this.el...............', this.el);
	        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
	        console.log('this.mapOptions', this.mapOptions);
	        this.mapOptions.zoom = this.mapOptions.zoom || 15;
	        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
	        this.map = new google.maps.Map(this.el, this.mapOptions);
	        this.setCenter();
	        //set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
	        // broadcast map ready message
	        this.ng2Map.map = this.map;
	        this.ng2Map.mapComponent = this;
	        this.ng2Map.map['mapComponent'] = this;
	        // ........
	        console.log('map is ready.......');
	        this.ng2Map.mapReady$.next(this.map);
	        // update map when input changes
	        this.inputChanges$
	            .debounceTime(1000)
	            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
	    };
	    Ng2MapComponent.prototype.setCenter = function () {
	        var _this = this;
	        if (!this['center']) {
	            this.geolocation.getCurrentPosition().subscribe(function (position) {
	                console.log('setting map center from current location');
	                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	                _this.map.setCenter(latLng);
	            });
	        }
	        else if (typeof this['center'] === 'string') {
	            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
	                console.log('setting map center from address', _this['center']);
	                _this.map.setCenter(results[0].geometry.location);
	            });
	        }
	    };
	    Ng2MapComponent.prototype.openInfoWindow = function (id, anchor, data) {
	        this.infoWindows[id].open(anchor, data);
	    };
	    Ng2MapComponent.prototype.ngOnDestroy = function () {
	        var _this = this;
	        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.map, output); });
	    };
	    Ng2MapComponent = __decorate([
	        core_1.Component({
	            selector: 'ng2-map, jui-map',
	            providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
	            styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	            encapsulation: core_1.ViewEncapsulation.None,
	            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  "
	        }), 
	        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, core_1.NgZone, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder, ng2_map_1.Ng2Map])
	    ], Ng2MapComponent);
	    return Ng2MapComponent;
	}());
	exports.Ng2MapComponent = Ng2MapComponent;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var option_builder_1 = __webpack_require__(3);
	var navigator_geolocation_1 = __webpack_require__(7);
	var geo_coder_1 = __webpack_require__(5);
	var ng2_map_1 = __webpack_require__(8);
	var Rx_1 = __webpack_require__(6);
	var INPUTS = "\n  anchorPoint, animation, clickable, cursor, draggable, icon, label, opacity\n  ,optimized,place, position, shape, title, visible, zIndex".split(',').map(function (el) { return el.trim(); });
	var OUTPUTS = "\n  animation_changed, click, clickable_changed, cursor_changed, dblclick, drag, dragend, draggable_changed,\n  dragstart, flat_changed, icon_changed, mousedown, mouseout, mouseover, mouseup, position_changed, rightclick,\n  shape_changed, title_changed, visible_changed, zindex_changed\n  ".split(',').map(function (el) { return ("marker" + el.trim().replace(/^[a-z]/, function (x) { return x.toUpperCase(); })); });
	var Marker = (function () {
	    function Marker(ng2Map, optionBuilder, geolocation, geoCoder) {
	        var _this = this;
	        this.ng2Map = ng2Map;
	        this.optionBuilder = optionBuilder;
	        this.geolocation = geolocation;
	        this.geoCoder = geoCoder;
	        this.options = {};
	        this.inputChanges$ = new Rx_1.Subject();
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
	    Marker.prototype.ngOnChanges = function (changes) {
	        this.inputChanges$.next(changes);
	    };
	    // called when map is ready
	    Marker.prototype.initialize = function (map) {
	        var _this = this;
	        console.log('marker is being initialized');
	        this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
	        console.log('MARKER options', this.options);
	        this.options.map = map;
	        // will be set after geocoded
	        typeof this.options.position === 'string' && (delete this.options.position);
	        this.marker = new google.maps.Marker(this.options);
	        this.setPosition();
	        //set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(OUTPUTS, this, 'marker');
	        // update marker when input changes
	        this.inputChanges$
	            .subscribe(function (changes) {
	            console.log('marker options are changed', changes);
	            _this.ng2Map.updateGoogleObject(_this.marker, changes);
	        });
	    };
	    Marker.prototype.setPosition = function () {
	        var _this = this;
	        setTimeout(function () {
	            if (!_this['position']) {
	                _this.geolocation.getCurrentPosition().subscribe(function (position) {
	                    console.log('setting marker position from current location');
	                    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	                    _this.marker.setPosition(latLng);
	                });
	            }
	            else if (typeof _this['position'] === 'string') {
	                _this.geoCoder.geocode({ address: _this['position'] }).subscribe(function (results) {
	                    console.log('setting marker position from address', _this['position']);
	                    _this.marker.setPosition(results[0].geometry.location);
	                });
	            }
	        }, 500);
	    };
	    Marker.prototype.ngOnDestroy = function () {
	        var _this = this;
	        OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.marker, output); });
	        delete this.marker.setMap(null);
	        delete this.marker;
	    };
	    Marker = __decorate([
	        core_1.Directive({
	            selector: 'marker',
	            inputs: INPUTS,
	            outputs: OUTPUTS
	        }), 
	        __metadata('design:paramtypes', [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder])
	    ], Marker);
	    return Marker;
	}());
	exports.Marker = Marker;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var option_builder_1 = __webpack_require__(3);
	var ng2_map_1 = __webpack_require__(8);
	var Rx_1 = __webpack_require__(6);
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


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-map.umd.js.map