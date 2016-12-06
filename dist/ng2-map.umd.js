(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "rxjs/Subject", "rxjs/add/operator/debounceTime"], factory);
	else if(typeof exports === 'object')
		exports["ng2-map"] = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"));
	else
		root["ng2-map"] = factory(root["@angular/core"], root["@angular/common"], root["rxjs/Subject"], root["rxjs/add/operator/debounceTime"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
	var marker_1 = __webpack_require__(11);
	exports.Marker = marker_1.Marker;
	var circle_1 = __webpack_require__(13);
	exports.Circle = circle_1.Circle;
	var polygon_1 = __webpack_require__(14);
	exports.Polygon = polygon_1.Polygon;
	var info_window_1 = __webpack_require__(15);
	exports.InfoWindow = info_window_1.InfoWindow;
	var polyline_1 = __webpack_require__(16);
	exports.Polyline = polyline_1.Polyline;
	var ground_overlay_1 = __webpack_require__(17);
	exports.GroundOverlay = ground_overlay_1.GroundOverlay;
	var kml_layer_1 = __webpack_require__(18);
	exports.KmlLayer = kml_layer_1.KmlLayer;
	var bicycling_layer_1 = __webpack_require__(19);
	exports.BicyclingLayer = bicycling_layer_1.BicyclingLayer;
	var transit_layer_1 = __webpack_require__(20);
	exports.TransitLayer = transit_layer_1.TransitLayer;
	var traffic_layer_1 = __webpack_require__(21);
	exports.TrafficLayer = traffic_layer_1.TrafficLayer;
	var heatmap_layer_1 = __webpack_require__(22);
	exports.HeatmapLayer = heatmap_layer_1.HeatmapLayer;
	var data_layer_1 = __webpack_require__(23);
	exports.DataLayer = data_layer_1.DataLayer;
	var street_view_panorama_1 = __webpack_require__(24);
	exports.StreetViewPanorama = street_view_panorama_1.StreetViewPanorama;
	var COMPONENTS_DIRECTIVES = [
	    ng2_map_component_1.Ng2MapComponent, info_window_1.InfoWindow,
	    marker_1.Marker, circle_1.Circle, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
	    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
	    street_view_panorama_1.StreetViewPanorama
	];
	var Ng2MapModule = (function () {
	    function Ng2MapModule() {
	    }
	    Ng2MapModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: COMPONENTS_DIRECTIVES,
	            providers: [geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation, ng2_map_1.Ng2Map, option_builder_1.OptionBuilder],
	            exports: [COMPONENTS_DIRECTIVES]
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
	        // if options given from user, only take options and ignore other inputs
	        if (userInputs.options) {
	            options = userInputs.options;
	            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
	                console.error('when "options" are used, other options are ignored');
	            }
	        }
	        else {
	            definedInputs.forEach(function (input) {
	                if (userInputs[input] !== undefined) {
	                    options[input] = _this.googlize(userInputs[input], { key: input });
	                }
	            });
	        }
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
	        var output = input;
	        if (typeof input === 'string') {
	            if (input === 'false') {
	                output = false;
	            }
	            else if (input === '0') {
	                output = 0;
	            }
	            else {
	                output =
	                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
	                    this.getJSONParsed(input, options)
	                        || this.getAnyMapObject(input)
	                        || this.getAnyMapConstant(input, options)
	                        || this.getDateObject(input)
	                        || input;
	            }
	        }
	        if (output instanceof Array) {
	            if (options['key'] === 'bounds') {
	                output = new google.maps.LatLngBounds(output[0], output[1]);
	            }
	            else if (options['key'] === 'icons') {
	                output = this.getMapIcons(output);
	            }
	            else if (options['key'] === 'position') {
	                output = this.getLatLng(output);
	            }
	        }
	        else if (options['key'] && output instanceof Object) {
	            if (options['key'] === 'icon') {
	                output = this.getMarkerIcon(output);
	            }
	            else if (options['key'].match(/ControlOptions$/)) {
	                output = this.getMapControlOption(output);
	            }
	        }
	        //delete keys only for processing, not used by google
	        delete output['doNotConverStringToNumber'];
	        delete output['key'];
	        return output;
	    };
	    OptionBuilder.prototype.getLatLng = function (input) {
	        var output;
	        if (input[0].constructor === Array) {
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
	                var exp = 'new google.maps.' + input;
	                // tslint:disable-next-line
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
	                else if (key === 'mapTypeIds') {
	                    value = value.map(function (str) {
	                        if (str.match(/^[A-Z]+$/)) {
	                            return google.maps.MapTypeId[str.toUpperCase()];
	                        }
	                        else {
	                            return str;
	                        }
	                    });
	                }
	                if (key === 'style') {
	                    var objName = key.replace(/Options$/, '') + 'Style';
	                    newControlOptions[key] = google.maps[objName][value];
	                }
	                else if (key === 'position') {
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
	        if (('' + output.path).match(/^[A-Z_]+$/)) {
	            output.path = google.maps.SymbolPath[output.path];
	        }
	        for (var key in output) {
	            var arr = output[key];
	            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
	                output[key] = new google.maps.Point(arr[0], arr[1]);
	            }
	            else if (key === 'size' || key === 'scaledSize') {
	                output[key] = new google.maps.Size(arr[0], arr[1]);
	            }
	        }
	        return output;
	    };
	    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
	        for (var i = 0; i < definedInputs.length; i++) {
	            var input = definedInputs[i];
	            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
	                return false;
	            }
	        }
	        return true;
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
	        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
	        if (input.match(re)) {
	            input = '[' + input + ']';
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
	var Subject_1 = __webpack_require__(6);
	/**
	 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
	 *   service for Google Geocoder service
	 */
	var GeoCoder = (function () {
	    function GeoCoder() {
	    }
	    GeoCoder.prototype.geocode = function (options) {
	        var geocode$ = new Subject_1.Subject();
	        var geocoder = new google.maps.Geocoder();
	        geocoder.geocode(options, function (results, status) {
	            if (status === google.maps.GeocoderStatus.OK) {
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
	var Subject_1 = __webpack_require__(6);
	/**
	 *  service for navigator.geolocation methods
	 */
	var NavigatorGeolocation = (function () {
	    function NavigatorGeolocation() {
	    }
	    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
	        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
	        var getCurrentPosition$ = new Subject_1.Subject();
	        if (navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition(function (position) { return getCurrentPosition$.next(position); }, function (evt) { return getCurrentPosition$.error(evt); }, geoLocationOptions);
	        }
	        else {
	            getCurrentPosition$.error('Browser Geolocation service failed.');
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
	var option_builder_1 = __webpack_require__(3);
	var geo_coder_1 = __webpack_require__(5);
	/**
	 * collection of map instance-related properties and methods
	 */
	var Ng2Map = (function () {
	    function Ng2Map(geoCoder, optionBuilder) {
	        this.geoCoder = geoCoder;
	        this.optionBuilder = optionBuilder;
	    }
	    Ng2Map.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
	        definedEvents.forEach(function (definedEvent) {
	            var eventName = definedEvent
	                .replace(/([A-Z])/g, function ($1) { return ("_" + $1.toLowerCase()); });
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
	var Subject_1 = __webpack_require__(6);
	__webpack_require__(10);
	var INPUTS = [
	    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
	    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
	    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
	    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'mapTypeControlOptions',
	    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions',
	    'options'
	];
	var OUTPUTS = [
	    'mapBoundsChanged', 'mapCenterChanged', 'mapClick', 'mapDblclick', 'mapDrag', 'mapDragend', 'mapDragstart', 'mapHeadingChanged', 'mapIdle',
	    'mapTypeidChanged', 'mapMousemove', 'mapMouseout', 'mapMouseover', 'mapProjectionChanged', 'mapResize', 'mapRightclick',
	    'mapTilesloaded', 'mapTileChanged', 'mapZoomChanged'
	];
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
	        this.inputChanges$ = new Subject_1.Subject();
	        this.mapReady$ = new core_1.EventEmitter();
	        // map objects by group
	        this.infoWindows = {};
	        // map has been fully initialized
	        this.mapIdledOnce = false;
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
	            script.id = 'ng2-map-api';
	            // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
	            var apiUrl = Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
	            apiUrl += apiUrl.indexOf('?') ? '&' : '?';
	            script.src = apiUrl + 'callback=initNg2Map';
	            document.querySelector('body').appendChild(script);
	        }
	    };
	    Ng2MapComponent.prototype.initializeMap = function () {
	        var _this = this;
	        this.el = this.elementRef.nativeElement.querySelector('.google-map');
	        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
	        this.mapOptions.zoom = this.mapOptions.zoom || 15;
	        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
	        this.map = new google.maps.Map(this.el, this.mapOptions);
	        this.map['mapObjectName'] = this.constructor['name'];
	        if (!this.mapOptions.center) {
	            this.setCenter();
	        }
	        // set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(OUTPUTS, this, 'map');
	        this.map.addListener('idle', function () {
	            if (!_this.mapIdledOnce) {
	                _this.mapReady$.emit(_this.map);
	                _this.mapIdledOnce = true;
	            }
	        });
	        // update map when input changes
	        this.inputChanges$
	            .debounceTime(1000)
	            .subscribe(function (changes) { return _this.ng2Map.updateGoogleObject(_this.map, changes); });
	    };
	    Ng2MapComponent.prototype.setCenter = function () {
	        var _this = this;
	        if (!this['center']) {
	            this.geolocation.getCurrentPosition().subscribe(function (position) {
	                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	                _this.map.setCenter(latLng);
	            });
	        }
	        else if (typeof this['center'] === 'string') {
	            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
	                _this.map.setCenter(results[0].geometry.location);
	            });
	        }
	    };
	    Ng2MapComponent.prototype.openInfoWindow = function (id, anchor, data) {
	        this.infoWindows[id].open(anchor, data);
	    };
	    Ng2MapComponent.prototype.ngOnDestroy = function () {
	        var _this = this;
	        if (this.el) {
	            OUTPUTS.forEach(function (output) { return google.maps.event.clearListeners(_this.map, output); });
	        }
	    };
	    Ng2MapComponent = __decorate([
	        core_1.Component({
	            selector: 'ng2-map',
	            providers: [ng2_map_1.Ng2Map, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
	            styles: ["\n    ng2-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	            encapsulation: core_1.ViewEncapsulation.None,
	            template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
	        }), 
	        __metadata('design:paramtypes', [option_builder_1.OptionBuilder, core_1.ElementRef, core_1.NgZone, navigator_geolocation_1.NavigatorGeolocation, geo_coder_1.GeoCoder, ng2_map_1.Ng2Map])
	    ], Ng2MapComponent);
	    return Ng2MapComponent;
	}());
	exports.Ng2MapComponent = Ng2MapComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [
	    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
	    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options'
	];
	var OUTPUTS = [
	    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
	    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
	    'dhapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
	];
	var Marker = (function (_super) {
	    __extends(Marker, _super);
	    function Marker(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'Marker', INPUTS, OUTPUTS);
	        this.ng2MapComp = ng2MapComp;
	        this.objectOptions = {};
	    }
	    Marker.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        this.setPosition();
	    };
	    Marker.prototype.setPosition = function () {
	        var _this = this;
	        if (!this['position']) {
	            this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (position) {
	                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	                // console.log('this.marker', this.marker);
	                _this.mapObject.setPosition(latLng);
	            });
	        }
	        else if (typeof this['position'] === 'string') {
	            this.ng2MapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
	                // console.log('this.marker', this.marker);
	                _this.mapObject.setPosition(results[0].geometry.location);
	            });
	        }
	    };
	    Marker = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > marker',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], Marker);
	    return Marker;
	}(base_map_directive_1.BaseMapDirective));
	exports.Marker = Marker;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var BaseMapDirective = (function () {
	    function BaseMapDirective(ng2MapComponent, mapObjectName, inputs, outputs) {
	        var _this = this;
	        this.ng2MapComponent = ng2MapComponent;
	        this.mapObjectName = mapObjectName;
	        this.inputs = inputs;
	        this.outputs = outputs;
	        this.initialized$ = new core_1.EventEmitter();
	        this.ng2Map = this.ng2MapComponent['ng2Map'];
	        this.optionBuilder = this.ng2MapComponent['optionBuilder'];
	        this.outputs.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
	        this.mapObjectName = mapObjectName;
	    }
	    // Initialize this map object when map is ready
	    BaseMapDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.ng2MapComponent.mapIdledOnce) {
	            this.initialize();
	        }
	        else {
	            this.ng2MapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
	        }
	    };
	    // only called when map is ready
	    BaseMapDirective.prototype.initialize = function () {
	        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
	        // will be set after geocoded
	        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
	        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
	        // noinspection TypeScriptUnresolvedFunction
	        if (this.libraryName) {
	            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
	        }
	        else {
	            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
	        }
	        this.mapObject.setMap(this.ng2MapComponent.map);
	        this.mapObject['mapObjectName'] = this.mapObjectName;
	        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
	        // set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
	        this.initialized$.emit(this.mapObject);
	    };
	    // When input is changed, update object too.
	    // e.g., when map center is changed by user, update center on the map
	    BaseMapDirective.prototype.ngOnChanges = function (changes) {
	        this.ng2Map.updateGoogleObject(this.mapObject, changes);
	    };
	    // When destroyed, remove event listener, and delete this object to prevent memory leak
	    BaseMapDirective.prototype.ngOnDestroy = function () {
	        var _this = this;
	        if (this.mapObject) {
	            this.outputs.forEach(function (output) { return google.maps.event.clearListeners(_this.mapObject, output); });
	            delete this.mapObject['setMap'](null);
	            delete this.mapObject;
	        }
	    };
	    return BaseMapDirective;
	}());
	exports.BaseMapDirective = BaseMapDirective;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [
	    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
	    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
	];
	var OUTPUTS = [
	    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
	    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
	];
	var Circle = (function (_super) {
	    __extends(Circle, _super);
	    function Circle(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'Circle', INPUTS, OUTPUTS);
	        this.ng2MapComp = ng2MapComp;
	        this.objectOptions = {};
	    }
	    Circle.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        this.setCenter();
	    };
	    Circle.prototype.setCenter = function () {
	        var _this = this;
	        if (!this['center']) {
	            this.ng2MapComp.geolocation.getCurrentPosition().subscribe(function (center) {
	                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
	                _this.mapObject.setCenter(latLng);
	            });
	        }
	        else if (typeof this['center'] === 'string') {
	            this.ng2MapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
	                _this.mapObject.setCenter(results[0].geometry.location);
	            });
	        }
	    };
	    Circle = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map>circle',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], Circle);
	    return Circle;
	}(base_map_directive_1.BaseMapDirective));
	exports.Circle = Circle;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [
	    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
	    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
	];
	var OUTPUTS = [
	    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
	    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
	];
	var Polygon = (function (_super) {
	    __extends(Polygon, _super);
	    function Polygon(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'Polygon', INPUTS, OUTPUTS);
	    }
	    Polygon = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map>polygon',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], Polygon);
	    return Polygon;
	}(base_map_directive_1.BaseMapDirective));
	exports.Polygon = Polygon;


/***/ },
/* 15 */
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
	var Subject_1 = __webpack_require__(6);
	__webpack_require__(10);
	var ng2_map_1 = __webpack_require__(8);
	var ng2_map_component_1 = __webpack_require__(9);
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
	        this.template = this.elementRef.nativeElement.innerHTML;
	        this.objectOptions = this.ng2MapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
	        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
	        this.infoWindow['mapObjectName'] = this.constructor['name'];
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
	    InfoWindow = __decorate([
	        core_1.Component({
	            selector: 'ng2-map>info-window',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	            template: "<ng-content></ng-content>",
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent, core_1.ElementRef, ng2_map_1.Ng2Map])
	    ], InfoWindow);
	    return InfoWindow;
	}());
	exports.InfoWindow = InfoWindow;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [
	    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
	    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
	];
	var OUTPUTS = [
	    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
	    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
	];
	var Polyline = (function (_super) {
	    __extends(Polyline, _super);
	    function Polyline(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'Polyline', INPUTS, OUTPUTS);
	    }
	    Polyline = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > polyline',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], Polyline);
	    return Polyline;
	}(base_map_directive_1.BaseMapDirective));
	exports.Polyline = Polyline;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
	var OUTPUTS = ['click', 'dblclick'];
	var GroundOverlay = (function (_super) {
	    __extends(GroundOverlay, _super);
	    function GroundOverlay(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS);
	        this.objectOptions = {};
	    }
	    // re-declaring initialize function. called when map is ready
	    GroundOverlay.prototype.initialize = function () {
	        // url, bounds are not the options of GroundOverlay
	        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
	        // noinspection TypeScriptUnresolvedFunction
	        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
	        this.mapObject.setMap(this.ng2MapComponent.map);
	        this.mapObject['mapObjectName'] = this.mapObjectName;
	        // set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
	    };
	    GroundOverlay = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > ground-overlay',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], GroundOverlay);
	    return GroundOverlay;
	}(base_map_directive_1.BaseMapDirective));
	exports.GroundOverlay = GroundOverlay;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
	var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
	var KmlLayer = (function (_super) {
	    __extends(KmlLayer, _super);
	    function KmlLayer(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'KmlLayer', INPUTS, OUTPUTS);
	    }
	    KmlLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > kml-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], KmlLayer);
	    return KmlLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.KmlLayer = KmlLayer;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [];
	var OUTPUTS = [];
	var BicyclingLayer = (function (_super) {
	    __extends(BicyclingLayer, _super);
	    function BicyclingLayer(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'BicyclingLayer', INPUTS, OUTPUTS);
	    }
	    BicyclingLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > bicycling-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], BicyclingLayer);
	    return BicyclingLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.BicyclingLayer = BicyclingLayer;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [];
	var OUTPUTS = [];
	var TransitLayer = (function (_super) {
	    __extends(TransitLayer, _super);
	    function TransitLayer(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'TransitLayer', INPUTS, OUTPUTS);
	    }
	    TransitLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > transit-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], TransitLayer);
	    return TransitLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.TransitLayer = TransitLayer;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = ['autoRefresh', 'options'];
	var OUTPUTS = [];
	var TrafficLayer = (function (_super) {
	    __extends(TrafficLayer, _super);
	    function TrafficLayer(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'TrafficLayer', INPUTS, OUTPUTS);
	    }
	    TrafficLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > traffic-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], TrafficLayer);
	    return TrafficLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.TrafficLayer = TrafficLayer;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
	var OUTPUTS = [];
	var HeatmapLayer = (function (_super) {
	    __extends(HeatmapLayer, _super);
	    function HeatmapLayer(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'HeatmapLayer', INPUTS, OUTPUTS);
	        this.libraryName = 'visualization';
	    }
	    HeatmapLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > heatmap-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], HeatmapLayer);
	    return HeatmapLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.HeatmapLayer = HeatmapLayer;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
	var OUTPUTS = [
	    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
	    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
	];
	var DataLayer = (function (_super) {
	    __extends(DataLayer, _super);
	    function DataLayer(ng2MapComponent) {
	        _super.call(this, ng2MapComponent, 'Data', INPUTS, OUTPUTS);
	    }
	    // only called when map is ready
	    DataLayer.prototype.initialize = function () {
	        if (this['geoJson']) {
	            this.ng2MapComponent.map.data.loadGeoJson(this['geoJson']);
	        }
	        else {
	            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
	            this.ng2MapComponent.map.data.add(this.objectOptions);
	        }
	        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
	        this.mapObject = this.ng2MapComponent.map.data;
	        // set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
	        this.initialized$.emit(this.mapObject);
	    };
	    DataLayer = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > data-layer',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], DataLayer);
	    return DataLayer;
	}(base_map_directive_1.BaseMapDirective));
	exports.DataLayer = DataLayer;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_map_directive_1 = __webpack_require__(12);
	var ng2_map_component_1 = __webpack_require__(9);
	var INPUTS = [
	    'selector', 'options',
	    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
	    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
	    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
	    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
	];
	var OUTPUTS = [
	    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
	    'visible_changed', 'zoom_changed'
	];
	var StreetViewPanorama = (function (_super) {
	    __extends(StreetViewPanorama, _super);
	    function StreetViewPanorama(ng2MapComp) {
	        _super.call(this, ng2MapComp, 'StreetViewPanorama', INPUTS, OUTPUTS);
	    }
	    // only called when map is ready
	    StreetViewPanorama.prototype.initialize = function () {
	        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
	        var element;
	        if (this.objectOptions.selector) {
	            element = document.querySelector(this['selector']);
	            delete this.objectOptions.selector;
	        }
	        else {
	            element = this.ng2MapComponent.el;
	        }
	        // will be set after geocoded
	        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
	        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
	        this.mapObject['mapObjectName'] = this.mapObjectName;
	        this.mapObject['ng2MapComponent'] = this.ng2MapComponent;
	        // set google events listeners and emits to this outputs listeners
	        this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
	        this.initialized$.emit(this.mapObject);
	    };
	    StreetViewPanorama = __decorate([
	        core_1.Directive({
	            selector: 'ng2-map > street-view-panorama',
	            inputs: INPUTS,
	            outputs: OUTPUTS,
	        }), 
	        __metadata('design:paramtypes', [ng2_map_component_1.Ng2MapComponent])
	    ], StreetViewPanorama);
	    return StreetViewPanorama;
	}(base_map_directive_1.BaseMapDirective));
	exports.StreetViewPanorama = StreetViewPanorama;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-map.umd.js.map