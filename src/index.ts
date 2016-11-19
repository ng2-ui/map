import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionBuilder } from './services/option-builder';
import { GeoCoder } from './services/geo-coder';
import { NavigatorGeolocation } from './services/navigator-geolocation';

import { Ng2Map } from './services/ng2-map';
import { Ng2MapComponent } from './components/ng2-map.component';
import { Marker } from './directives/marker';
import { Circle } from './directives/circle';
import { Polygon } from './directives/polygon';
import { InfoWindow } from './components/info-window';
import { Polyline } from './directives/polyline';
import { GroundOverlay } from './directives/ground-overlay';
import { KmlLayer } from "./directives/kml-layer";
import { BicyclingLayer } from "./directives/bicycling-layer";
import { HeatmapLayer } from "./directives/heatmap-layer";
import { TransitLayer } from "./directives/transit-layer";
import { TrafficLayer } from "./directives/traffic-layer";

export {
  OptionBuilder, GeoCoder, NavigatorGeolocation, Ng2Map,
  Ng2MapComponent, InfoWindow,
  Marker, Circle, Polygon, Polyline, GroundOverlay,
  TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer
};

const COMPONENTS_DIRECTIVES = [
  Ng2MapComponent, InfoWindow,
  Marker, Circle, Polygon, InfoWindow, Polyline, GroundOverlay,
  TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer
];

@NgModule({
  imports: [ CommonModule ],
  declarations: COMPONENTS_DIRECTIVES,
  providers: [GeoCoder, NavigatorGeolocation, Ng2Map, OptionBuilder],
  exports: [COMPONENTS_DIRECTIVES]
})
export class Ng2MapModule {}
