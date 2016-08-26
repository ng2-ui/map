# ng2-map

Angular2 Google Map ([ng-map](https://ngmap.github.io) version 2)

* **[![Imgur](http://i.imgur.com/O2EOCxf.png)](https://ng2map.github.io)**

### Design Principle

1. **All google properties must be able to be defined in html without Javascript.**   
   Thus, basic users don't even have to know what Javascript is. 

2. **Expose all original Google Maps V3 api to the user without any exception.**   
   No hiding, nor manipulation. By doing so, programmers don't need to learnthis module.
   If you know Google Maps V3 API, there shouldn't be no problem using this module.

### Usage

1. Install node_module `ng2-map` and typings

        $ npm install ng2-map --save
        $ typings install dt~google.maps --global --save

2. Update `system.config.js` to recognize ng2-map.

        map['ng2-map'] = 'node_modules/ng2-xxxxxxx/dist';
        packages['ng2-map'] = { main: 'index.js', defaultExtension: 'js' }

3. import Ng2AutoCompleteModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2Map} from 'ng2-map';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2Map],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

## Use it in your template

       <ng2-map  [center]="Brampton, Canada"></ng2-map>

For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

  NOTE: if you domain is new, and you are having api key error, please specify your api key like the following
  
      import { NG2_MAP_DIRECTIVES, Ng2MapComponent } from "ng2-map";  // <--- this
      // Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=YOUR_KEY";  // ???

      @Component({ ... })
      export class AppComponent {
        constructor() {
          Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=YOUR_KEY";
        }
      }

This module is only improved and maintained by contributors like you;

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
      <td> supported as `ng2-map`
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions">MarkerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker Events</a>
      <td> supported as `marker`
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions">InfoWindowOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow Events</a>
      <td> supported as `info-window`
<<<<<<< HEAD
  <tr><td> Circle        <td> CircleOptions            <td> Circle Events        <td> v0.6.0
  <tr><td> Polygon       <td> PolygonOptions           <td> Polygon Events       <td> v0.6.0
  <tr><td> Polyline      <td> PolylineOptions          <td> Polyline Events      <td> v0.6.0
  <tr><td> GroundOverlay <td> GroundOverlayOptions     <td> GroundOverlay Events <td> v0.6.0
  <tr><td> FusionTablesLayer <td> FusionTablesLayerOptions <td> FusionTablesLayer Events <td> v0.7.0
  <tr><td> HeatMapLayer  <td> HeatMapLayerLayerOptions <td> HeatMapLayer Events      <td> v0.7.0
  <tr><td> KmlLayer      <td> KmlLayerLayerOptions     <td> KmlLayer Events          <td> v0.7.0
  <tr><td> Data          <td> DataOptions              <td> Data Events              <td> v0.7.0 `map-data`
  <tr><td> BicyclingLayer  <td> BicyclingLayerOptins    <td> BicyclingLayer Events   <td> v0.8.0 
  <tr><td> MapsEngineLayer <td> MapsEngineLayerOptins   <td> MapsEngineLayer Events  <td> v0.8.0 
  <tr><td> TrafficLayer    <td> TrafficLayerOptions     <td> TrafficLayer Events     <td> v0.8.0 
  <tr><td> StreetViewPanorama  <td> StreetViewPanoramaOptions     <td> StreetViewPanorama Events  <td> v0.8.0 
  <tr><td> DrawingManager  <td> DrawingManagerOptions   <td> Drawing Manager Events <td> v0.9.0
  <tr><td> Autocomplete    <td> AutocompleteOptions     <td> Autocomplete Events    <td> v1.1.0
  <tr><td> DirectionsRenderer <td> DirectionsRendererOptions     <td> DirectionsRenderer Events    <td> v1.2.0
=======
  <tr><td> Circle        <td> CircleOptions            <td> Circle Events        <td> Coming soon
  <tr><td> Polygon       <td> PolygonOptions           <td> Polygon Events       <td> Coming Soon
  <tr><td> Polyline      <td> PolylineOptions          <td> Polyline Events      <td> Coming Soon
  <tr><td> GroundOverlay <td> GroundOverlayOptions     <td> GroundOverlay Events <td> Coming Soon
  <tr><td> FusionTablesLayer <td> FusionTablesLayerOptions <td> FusionTablesLayer Events <td>  Coming Soon
  <tr><td> HeatMapLayer  <td> HeatMapLayerLayerOptions <td> HeatMapLayer Events      <td> Coming Soon
  <tr><td> KmlLayer      <td> KmlLayerLayerOptions     <td> KmlLayer Events          <td> Coming Soon
  <tr><td> Data          <td> DataOptions              <td> Data Events              <td> Coming Soon `map-data`
  <tr><td> BicyclingLayer  <td> BicyclingLayerOptins    <td> BicyclingLayer Events   <td> Coming Soon 
  <tr><td> MapsEngineLayer <td> MapsEngineLayerOptins   <td> MapsEngineLayer Events  <td> Coming Soon 
  <tr><td> TrafficLayer    <td> TrafficLayerOptions     <td> TrafficLayer Events     <td> Coming Soon 
  <tr><td> StreetViewPanorama  <td> StreetViewPanoramaOptions     <td> StreetViewPanorama Events  <td> Coming Soon
  <tr><td> DrawingManager  <td> DrawingManagerOptions   <td> Drawing Manager Events <td> Coming Soon
  <tr><td> Autocomplete    <td> AutocompleteOptions     <td> Autocomplete Events    <td> Coming Soon
  <tr><td> DirectionsRenderer <td> DirectionsRendererOptions     <td> DirectionsRenderer Events    <td> Coming Soon
>>>>>>> rc5 upgrade
</table>

### For Developers

  * To run index.html in `test` directory
  
          $ cd test
          $ python -mSimpleHTTPServer

  * To test with src, update `systemjs.config.ts` to use `src` directory
  
          // For Development tet
          map['ng2-map'] = 'src';
          packages['ng2-map'] = { main: 'index.ts', defaultExtension: 'ts' };

  * To publish npm package
  
          $ npm run build
          * npm publish
          
  * To test with npm package,  update `systemjs.config.ts` to use `dist` directory
  
          // For node_modules test
          // map['ng2-map'] = 'dist';
          // packages['ng2-map'] = { main: 'index.js', defaultExtension: 'js' };
  
  
## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-map.git
    $ cd ng2-popup
    $ npm install
    $ npm start


