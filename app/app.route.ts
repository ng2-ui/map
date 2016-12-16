import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SimpleInfoWindowComponent } from './map-components/simple-info-window.component';
import { SimpleMapComponent } from './map-components/simple-map.component';
import { SimpleCircleComponent } from './map-components/simple-circle.component';
import { SimpleMarkerComponent } from './map-components/simple-marker.component';
import { MarkerNgForComponent } from './map-components/marker-ng-for.component';
import { MultipleMapComponent } from './map-components/multiple-map.component';
import { PolygonComponent } from './map-components/polygon.component';
import { MapWithOptionsComponent } from "./map-components/map-with-options.component";
import { SimplePolylineComponent } from "./map-components/simple-polyline.component";
import { SimpleGroundOverlayComponent } from "./map-components/simple-ground-overlay.component";
import { BicyclingLayerComponent } from "./map-components/bicycling-layer.component";
import { TrafficLayerComponent } from "./map-components/traffic-layer.component";
import { TransitLayerComponent } from "./map-components/transit-layer.component";
import { HeatmapLayerComponent } from "./map-components/heatmap-layer.component";
import { KmlLayerComponent } from "./map-components/kml-layer.component";
import { DataLayerComponent } from "./map-components/data-layer.component";
import { StreetViewPanoramaComponent } from "./map-components/street-view-panorama.component";
import { PlacesAutoCompleteComponent } from "./map-components/places-auto-compolete.component";
import { DirectionsRendererComponent } from "./map-components/directions-renderer.component";

export const routes: Routes = [
  { path: 'simple-info-window', component: SimpleInfoWindowComponent },
  { path: 'simple-circle', component: SimpleCircleComponent },
  { path: 'simple-map', component: SimpleMapComponent },
  { path: 'simple-marker', component: SimpleMarkerComponent },
  { path: 'map-with-options', component: MapWithOptionsComponent },
  { path: 'marker-ng-for', component: MarkerNgForComponent },
  { path: 'multiple-map', component: MultipleMapComponent },
  { path: 'polygon', component: PolygonComponent },
  { path: 'simple-polyline', component: SimplePolylineComponent },
  { path: 'simple-ground-overlay', component: SimpleGroundOverlayComponent },
  { path: 'traffic-layer', component: TrafficLayerComponent },
  { path: 'bicycling-layer', component: BicyclingLayerComponent },
  { path: 'transit-layer', component: TransitLayerComponent },
  { path: 'heatmap-layer', component: HeatmapLayerComponent },
  { path: 'kml-layer', component: KmlLayerComponent },
  { path: 'data-layer', component: DataLayerComponent },
  { path: 'street-view-panorama', component: StreetViewPanoramaComponent },
  { path: 'places-auto-complete', component: PlacesAutoCompleteComponent },
  { path: 'directions-renderer', component: DirectionsRendererComponent },
  { path: '',  redirectTo: '/simple-marker', pathMatch: 'full' },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
export const APP_ROUTER_COMPONENTS = [
  SimpleInfoWindowComponent,
  SimpleCircleComponent,
  SimpleMapComponent,
  SimpleMarkerComponent,
  MapWithOptionsComponent,
  MarkerNgForComponent,
  MultipleMapComponent,
  PolygonComponent,
  SimplePolylineComponent,
  SimpleGroundOverlayComponent,
  BicyclingLayerComponent,
  TrafficLayerComponent,
  TransitLayerComponent,
  HeatmapLayerComponent,
  DataLayerComponent,
  KmlLayerComponent,
  StreetViewPanoramaComponent,
  PlacesAutoCompleteComponent,
  DirectionsRendererComponent
];

