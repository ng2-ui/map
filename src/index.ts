import { BicyclingLayer } from './directives/bicycling-layer';
import { NavigatorGeolocation } from './services/navigator-geolocation';
import { OptionBuilder } from './services/option-builder';
import { NG_MAP_CONFIG_TOKEN, ConfigOption } from './services/config';

import { Ng2MapComponent } from './components/ng2-map.component';
import { InfoWindow } from './components/info-window';

import { Circle } from './directives/circle';
import { DataLayer } from './directives/data-layer';
import { DirectionsRenderer } from './directives/directions-renderer';
import { DrawingManager } from './directives/drawing-manager';
import { GeoCoder } from './services/geo-coder';
import { GroundOverlay } from './directives/ground-overlay';
import { HeatmapLayer } from './directives/heatmap-layer';
import { KmlLayer } from './directives/kml-layer';
import { Marker } from './directives/marker';
import { Ng2Map } from './services/ng2-map';
import { PlacesAutoComplete } from './directives/places-auto-complete';
import { Polygon } from './directives/polygon';
import { Polyline } from './directives/polyline';
import { StreetViewPanorama } from './directives/street-view-panorama';
import { TrafficLayer } from './directives/traffic-layer';
import { TransitLayer } from './directives/transit-layer';

import { Ng2MapModule } from './ng2-map.module';

export {
  BicyclingLayer,
  Circle,
  DataLayer,
  DirectionsRenderer,
  DrawingManager,
  GeoCoder,
  GroundOverlay,
  HeatmapLayer,
  InfoWindow,
  KmlLayer,
  Marker,
  NavigatorGeolocation,
  Ng2Map,
  Ng2MapComponent,
  Ng2MapModule,
  OptionBuilder,
  PlacesAutoComplete,
  Polygon,
  Polyline,
  StreetViewPanorama,
  TrafficLayer,
  TransitLayer,
  NG_MAP_CONFIG_TOKEN,
  ConfigOption,
};
