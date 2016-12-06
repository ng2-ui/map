# ng2-map

Angular2 Google Map ([ng-map](https://ngmap.github.io) version 2)

* **[![Imgur](http://i.imgur.com/O2EOCxf.png)](https://rawgit.com/ng2-ui/ng2-map/master/app/index.html)**		

### Design Principle

1. **All google properties must be able to be defined in html without Javascript.**

   Thus, basic users don't even have to know what Javascript is.

2. **Expose all original Google Maps V3 api to the user without any exception.**

   No hiding, nor manipulation. By doing so, programmers don't need to learnthis module.
   If you know Google Maps V3 API, there shouldn't be no problem using this module.

### Usage

1. Install node_module `ng2-map` and typings

        $ npm install ng2-map @types/google-maps --save

2. For SystemJs users only, update `system.config.js` to recognize ng2-map.

        map['ng2-map'] = 'node_modules/ng2-map/dist';
        packages['ng2-map'] = { main: 'ng2-map.umd.js', defaultExtension: 'js' }

3. import Ng2MapeModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';

        import { AppComponent } from './app.component';
        import { Ng2MapModule} from 'ng2-map';

        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2MapModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

4. Your Google maps may require API key, then override `apiUrl`

        import { Component } from '@angular/core';
        import { Ng2MapComponent } from 'ng2-map';

        @Component({ ... })
        export class AppComponent {

          constructor() {
            Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=XXXXXXXXXXXXXXXXXXXXXXXXXX';
          }
        }

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
  -  and `app.component.ts`.

## How to get instance of a map
 
When map is ready Ng2MapComonent fires mapReady$ event with `map` object

```HTML
<ng2-map zoom="13" center="37.775, -122.434" mapTypeId="satellite">
</ng2-map>
```

In your app component, 

```TypeScript
import {Ng2MapComponent} from "ng2-map";

export class MyAppComponent {
  @ViewChild(Ng2MapComponent) ng2MapComponent: Ng2MapComponent;
  pulic map: google.maps.Map;
  ngOnInit() {
    this.ng2MapComponent.mapReady$.subscribe(map => {
      this.map = map;
    })
  }
}
```

## How to get instance of a map object

When any map directive is initialized, each directive  fires initialized$ event with its object.
For HTML like the following, 
```HTML
<ng2-map zoom="13" center="37.775, -122.434" mapTypeId="satellite">
  <marker position="37.775, -122.434"></marker>
</ng2-map>
```

In your app component, use initialized$ event of a map object component, which is a ViewChild

```TypeScript
import {Marker} from "ng2-map";

export class MyAppComponent {
  @ViewChild(Marker) marker: Marker;
  pulic marker: google.maps.Marker;
  ngOnInit() {
    this.Maker.initialized$.subscribe(marker => {
      this.marker = marker;
    })
  }
}
```

## Need Contributors
 
This `ng2-map` module is only improved and maintained by contributors like you;

As a contributor, it's NOT required to be skilled in Javascript nor Angular2.
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
           <xa href="">ng2-map data example</xa>
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
  <tr><td> StreetViewPanorama
      <td> StreetViewPanoramaOptions
      <td> StreetViewPanorama Events  
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/streetview-embed">Google Streetview Example</a> <br/>
           <xa href="">ng2-map streetview-panorama example</xa>
  <tr><td> Autocomplete    <td> AutocompleteOptions     <td> Autocomplete Events    
      <td><a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete">Google Places Autocomplete Example</a> <br/>
           <xa href="">ng2-map streetview-panorama example</xa>
  <tr><td> DirectionsRenderer <td> DirectionsRendererOptions     <td> DirectionsRenderer Events    
      <td> <a href="https://developers.google.com/maps/documentation/javascript/examples/directions-complex">Google DirectionsExample</a> <br/>
           <xa href="">ng2-map directions-renderer example</xa> 
</table>

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
