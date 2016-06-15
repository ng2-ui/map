# ng2-map

Angular2 Google Map (ng-map version 2)

* **[DEMO](http://plnkr.co/edit/9AI9dg?p=preview)**

### Design Principle

1. **All google properties must be able to be defined in html without Javascript.**   
   Thus, basic users don't even have to know what Javascript is. 

2. **Expose all original Google Maps V3 api to the user without any exception.**   
   No hiding, nor manipulation. By doing so, programmers don't need to learnthis module.
   If you know Google Maps V3 API, there shouldn't be no problem using this module.

### Usage

1. Install node_module `ng2-map`

        $ npm install ng2-map --save
       
2. Update `system.config.js` to recognize ng2-map.

        map['ng2-map'] = 'node_modules/ng2-map';
        packages['ng2-map'] = { main: 'index.js', defaultExtension: 'js' };
        
3. Ready to go. Use it in your application by importing `NG2_MAP_DIRECTIVES`.

        import { NG2_MAP_DIRECTIVES } from "ng2-map";

        @Component({
          selector: 'my-app',
          directives: [ NG2_MAP_DIRECTIVES ],
          template: `<ng2-map  [center]="Brampton, Canada"></ng2-map>`
        })
        export class AppComponent {
          ... 
        }
          
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
  <tr><td> Circle        <td> CircleOptions            <td> Circle Events        <td> v0.2.0
  <tr><td> Polygon       <td> PolygonOptions           <td> Polygon Events       <td> v0.2.0
  <tr><td> Polyline      <td> PolylineOptions          <td> Polyline Events      <td> v0.2.0
  <tr><td> GroundOverlay <td> GroundOverlayOptions     <td> GroundOverlay Events <td> v0.2.0
  <tr><td> FusionTablesLayer <td> FusionTablesLayerOptions <td> FusionTablesLayer Events <td> v0.3.0
  <tr><td> HeatMapLayer  <td> HeatMapLayerLayerOptions <td> HeatMapLayer Events      <td> v0.3.0
  <tr><td> KmlLayer      <td> KmlLayerLayerOptions     <td> KmlLayer Events          <td> v0.3.0
  <tr><td> Data          <td> DataOptions              <td> Data Events              <td> v0.4.0 `<map-data>`
  <tr><td> BicyclingLayer  <td> BicyclingLayerOptins    <td> BicyclingLayer Events   <td> v0.5.0 
  <tr><td> MapsEngineLayer <td> MapsEngineLayerOptins   <td> MapsEngineLayer Events  <td> v0.5.0 
  <tr><td> TrafficLayer    <td> TrafficLayerOptions     <td> TrafficLayer Events     <td> v0.5.0 
  <tr><td> StreetViewPanorama  <td> StreetViewPanoramaOptions     <td> StreetViewPanorama Events  <td> v0.6.0 
  <tr><td> DrawingManager  <td> DrawingManagerOptions   <td> Drawing Manager Events <td> 0.7.0
  <tr><td> Autocomplete    <td> AutocompleteOptions     <td> Autocomplete Events    <td> 1.1.0
  <tr><td> DirectionsRenderer <td> DirectionsRendererOptions     <td> DirectionsRenderer Events    <td> 1.2.0
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
  
  