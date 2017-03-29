import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionBuilder } from './services/option-builder';
import { GeoCoder } from './services/geo-coder';
import { NavigatorGeolocation } from './services/navigator-geolocation';
import { NG_MAP_CONFIG_TOKEN, ConfigOption } from './services/config';
import { NgMapApiLoader, NgMapAsyncCallbackApiLoader } from './services/api-loader';

import { NguiMapComponent } from './components/ngui-map.component';
import { InfoWindow } from './components/info-window';
import { CustomMarker } from './components/custom-marker';

import { BicyclingLayer } from './directives/bicycling-layer';
import { Circle } from './directives/circle';
import { DataLayer } from './directives/data-layer';
import { DirectionsRenderer } from './directives/directions-renderer';
import { DrawingManager } from './directives/drawing-manager';
import { GroundOverlay } from './directives/ground-overlay';
import { HeatmapLayer } from './directives/heatmap-layer';
import { KmlLayer } from './directives/kml-layer';
import { Marker } from './directives/marker';
import { NguiMap } from './services/ngui-map';
import { PlacesAutoComplete } from './directives/places-auto-complete';
import { Polygon } from './directives/polygon';
import { Polyline } from './directives/polyline';
import { StreetViewPanorama } from './directives/street-view-panorama';
import { TrafficLayer } from './directives/traffic-layer';
import { TransitLayer } from './directives/transit-layer';

const COMPONENTS_DIRECTIVES = [
  NguiMapComponent, InfoWindow,
  Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay,
  TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer,
  StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer,
  DrawingManager,
];

@NgModule({
  imports: [ CommonModule ],
  declarations: COMPONENTS_DIRECTIVES,
  exports: [COMPONENTS_DIRECTIVES],
  providers: [
    GeoCoder,
    NavigatorGeolocation,
    NguiMap,
    OptionBuilder,
    {provide: NgMapApiLoader, useClass: NgMapAsyncCallbackApiLoader},
  ]
})
export class NguiMapModule {
  static forRoot(config: ConfigOption = {}): ModuleWithProviders {
    return {
      ngModule: NguiMapModule,
      providers: [
        { provide: NG_MAP_CONFIG_TOKEN, useValue: config }
      ],
    };
  }
}
