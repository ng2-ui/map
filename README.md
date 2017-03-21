# ng2-map

[![Build Status](https://travis-ci.org/ng2-ui/ng2-map.svg?branch=master)](https://travis-ci.org/ng2-ui/ng2-map)
[![Join the chat at https://gitter.im/ng2-ui/ng2-map](https://badges.gitter.im/ng2-ui/ng2-map.svg)](https://gitter.im/ng2-ui/ng2-map?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular2 Google Map ([ng-map](https://ngmap.github.io) version 2)

* **[![Imgur](http://i.imgur.com/O2EOCxf.png)](https://rawgit.com/ng2-ui/ng2-map/master/app/index.html)**		
* [Plunker Example](https://plnkr.co/edit/6e1qWK?p=preview)
* [Place Auto Complete Plunker Example](https://plnkr.co/edit/AT3fxW?p=preview)

If you like this, you also may like these;
* [ng-map](https://github.com/allenhwkim/angularjs-google-maps) Google Maps Wrapper for Angular 1.*
* [react-openlayers](https://github.com/allenhwkim/react-openlayers) React + OpenLayers

### Design Principle

1. **All google properties must be able to be defined in html without Javascript.**

   Thus, basic users don't even have to know what Javascript is.

2. **Expose all original Google Maps V3 api to the user without any exception.**

   No hiding, nor manipulation. By doing so, programmers don't need to learn any about this convenient module.
   If you know Google Maps V3 API, there shouldn't be no problem using this module.

### Usage

1. Install node_module `ng2-map` and typings

        $ npm install ng2-map @types/google-maps --save

2. _For SystemJs users only_, update `system.config.js` to recognize ng2-map.

        map['ng2-map'] = 'node_modules/ng2-map/dist';
        packages['ng2-map'] = { main: 'ng2-map.umd.js', defaultExtension: 'js' }

3. import Ng2MapeModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';

        import { AppComponent } from './app.component';
        import { Ng2MapModule} from 'ng2-map';

        @NgModule({
          imports: [
            BrowserModule, 
            FormsModule, 
            Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY'})
          ],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }


## Use it in your template

```
<ng2-map center="Brampton, Canada"></ng2-map>
```
or, 
```
<ng2-map [options]="mapOptions"></ng2-map>
```

For full example, please check out `app` directory to see the example of;

  - `main.ts`
  -  and `app/map-components`.

## How to get a instance(s) of a map or markers

* Ng2MapComponent fires `mapReady$` event with `map` object
* Each ng2-map directives fires `initialized$` event with its Google map object, e.g. google.maps.Marker
* Other way is to get a map object is to any event. All event has `target` value, which is a Google map object.

```HTML
<ng2-map 
  zoom="13" 
  center="37.775, -122.434" 
  (mapReady$)="onMapReady($event)"
  (mapClick)="onMapClick($event)"
  (idle)="onIdle($event)"
  mapTypeId="satellite">
    <marker *ngFor="let pos of positions" 
      [position]="pos"
      (initialized$)="onMarkerInit($event)"></marker>
</ng2-map>
```

In your app component, 

```TypeScript
export class MyAppComponent {
  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
}
```

## Need Contributors
 
This `ng2-map` module is only improved and maintained by volunteers like you;

As a volunteer, it's NOT required to be skilled in Javascript nor Angular2.
It’s required to be open-minded and interested in helping others.
You can contribute to the following;

  * Updating README.md
  * Making more and clearer comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id.

### Google Maps V3 Compatibility Table

<table>
  <tr><th> Object  <th> Options <th> Events <th> Note </tr>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Map">Map</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#MapOptions">MapOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Map">Map Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/map-simple">Google Simple Map Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-map">ng2-map example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions">MarkerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/marker-simple">Google Simple Marker Example</a> <br/> 
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-marker">ng2-map marker example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions">InfoWindowOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow Events</a>
      <td>  <a href="https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple">Google Infowindows Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-info-window">ng2-map info-window example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Circle">Circle</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#CircleOptions">CircleOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Circle">Circle Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/circle-simple">Google Circle example</a>  <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-circle">ng2-map circle example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Polygon">Polygon</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#PolygonOptions">PolygonOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Polygon">Polygon Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-hole">Google Polygon example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/polygon">ng2-map polygon example</a> 
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Polyline">Polyline</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions">PolylineOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Polyline">Polyline Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/polyline-simple">Google Polyline Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-polyline">ng2-map polyline  example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay">GroundOverlay</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#GroundOverlayOptions">GroundOverlayOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay">GroundOverlay Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/groundoverlay-simple">Google Simple Ground Overlay Example</a><br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/simple-ground-overlay">ng2-map ground-overlay example</a>
  <tr><td> FusionTablesLayer <td> FusionTablesLayerOptions <td> FusionTablesLayer Events <td> Experimental Status - No Plan to implement
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayer">HeatmapLayer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayerOptions">HeatmapLayerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayer">HeatmapLayer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap">Google Heatmap Layer</a> <br/> 
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/heatmap-layer">ng2-map heatmap-layer example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#KmlLayer">KmlLayer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#KmlLayerOptions">KmlLayerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#KmlLayer">KmlLayer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-kml">Google Kml Layer</a> <br/> 
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/heatmap-layer">ng2-map kml-layer example</a> 
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Data">Data</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DataOptions">DataOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Data">Data Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-data-simple">Google Layer Data Example</a> <br/> 
           <xa href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/data-layer">ng2-map data example</xa>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#BicyclingLayer">BicyclingLayer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#BicyclingLayerOptions">BicyclingLayerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#BicyclingLayer">BicyclingLayer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-bicycling">Google Bycycling Layer Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/bicycling-layer">ng2-map bicycling-layer example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TrafficLayer">TrafficLayer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TrafficLayerOptions">TrafficLayerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TrafficLayer">TrafficLayer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-traffic">Google Traffic Layer Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/traffic-layer">ng2-map traffic-layer example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TransitLayer">TransitLayer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TransitLayerOptions">TransitLayerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#TransitLayer">TransitLayer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-transit">Google Transit Layer Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/transit-layer">ng2-map transit-layer example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama">StreetViewPanorama</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanoramaOptions">StreetViewPanoramaOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama">StreetViewPanorama Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/streetview-embed">Google Streetview Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/street-view-panorama">ng2-map streetview-panorama example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#AutoComplete">AutoComplete</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#AutoCompleteOptions">AutoComplete Options</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#AutoComplete">AutoComplete Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete">Google Places Autocomplete Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/palces-auto-complete">ng2-map places-auto-complete example</a>
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer">DirectionsRenderer</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DirectionsRendererOptions">DirectionsRenderer Options</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer">DirectionsRenderer Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/directions-complex">Google Directions Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/directions-renderer">ng2-map directions-renderer example</a> 
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DrawingManager">DrawingManager</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DrawingManagerOptions">DrawingManager Options</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#DrawingManager">DrawingManager Events</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/drawing-tools">Google Drawing Manager Example</a> <br/>
           <a href="https://rawgit.com/ng2-ui/ng2-map/master/app/index.html#/drawing-manager">ng2-map drawing-manager example</a> 
</table>

### Custom Directives

* custom-marker
  * properties: position
  * event: all marker events.

### For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-map.git
    $ cd ng2-map
    $ npm install
    $ npm start

### List of available npm tasks

  * `npm run` : List all available tasks
  * `npm start`: Run `app` directory for development using `webpack-dev-server` with port 9001
  * `npm run clean`: Remove dist folder
  * `npm run clean:dist`: Clean up unnecessary dist folder within dist and app directory
  * `npm run lint`: Lint TypeScript code
  * `npm run build:ngc`: build ES module
  * `npm run build:umd`: Build UMD module `ng2-map.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, build:app, and clean:dist)
