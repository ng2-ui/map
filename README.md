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

       <ng2-map [center]="Brampton, Canada"></ng2-map>

For full example, please check out `app` directory to see the example of;

  - `main.ts`
  -  and `app.component.ts`.

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
      <td> supported as `ng2-map`
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions">MarkerOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Marker">Marker Events</a>
      <td> supported as `marker`
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions">InfoWindowOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">InfoWindow Events</a>
      <td> supported as `info-window`
  <tr><td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Circle">Circle</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#CircleOptions">CircleOptions</a>
      <td> <a href="https://developers.google.com/maps/documentation/javascript/reference#Circle">Circle Events</a>
      <td> supported as `circle`
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
  * `npm run lint`: Lint TypeScript code
  * `npm run build:ngc`: ???????????????????
  * `npm run build:umd`: Build `ng2-map.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, and build:app)
