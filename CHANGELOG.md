# 0.17.0 (2017-03-29)

  * renamed module to @ngui/map

# 0.16.0 (2017-03-04)
 
  * Added @Output initialized$ on all dierctives
  * Fixed emit/subscribe issue, issue #99

# 0.15.0 (2017-01-23)

  * added geo fallback options for map and marker
  * **0.15.1 (2017-01-29)**
    * Added more webtest
  * **0.15.2 (2017-02-11)**
    * Fixed a bug of geocode callback losing setMethod name
    * Exposed `mapReady$` and `initialized$` as an Output
  * **0.15.3 (2017-02-13)**
    * Made available for both imports of `NguiMapModule` and `NguiMapModule.forRoot()`
  * **0.15.4 (2017-02-16)**
    * Upgraded webpack from 1.* tp 2.*
    * Fixed multiple map instance not loading on the first page.
  * **0.15.5 (2017-02-16)** Removed debug line
  * **0.15.6/7 (2017-02-16)**
    * Fixed custom marker positioning
    * issue #91, #92 fixed bug of not displaying map with places-autocomplete

# 0.14.0 (2017-01-12)

  * new directive, custom-marker

# 0.13.2 (2016-12-20)

  * event parameter is changed from object to event. event.target is a google map object from now on.

# 0.13.0 (2016-12-23)

  * new directive, drawing-manager

# 0.12.0 (2016-12-9)

  * new directive, directions-renderer
  
# 0.11.0 (2016-12-6)

  * new directive, places-auto-complete
  
# 0.10.0 (2016-12-6)

  * new directive, data-layer, street-view-panorama
  * little re-factoring on build
  
# 0.9.0 (2016-11-22)

  * new directive, polyline, ground-overlay
  * layer directives, traffic-layer, transit-layer, heatmap-layer, bicycling-layer, kml-layer
  
# 0.8.0 (2016-11-16)

  * added Polygon Directive
  * [options] property is added for all directives
  * added BaseMapDirective for the super class of all map directives

# 0.7.0 (2016-11-06)
 
  * Added Circle Directive (Thanks to Abdellatif Ait boudad)
 
