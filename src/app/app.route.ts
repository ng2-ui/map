import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SimpleInfoWindowComponent } from './components/simple-info-window.component';
import { SimpleMapComponent } from './components/simple-map.component';
import { SimpleCircleComponent } from './components/simple-circle.component';
import { SimpleMarkerComponent } from './components/simple-marker.component';
import { MarkerNgForComponent } from './components/marker-ng-for.component';
import { MultipleMapComponent } from './components/multiple-map.component';
import { PolygonComponent } from './components/polygon.component';
import { MapWithOptionsComponent } from './components/map-with-options.component';
import { SimplePolylineComponent } from './components/simple-polyline.component';
import { SimpleGroundOverlayComponent } from './components/simple-ground-overlay.component';
import { BicyclingLayerComponent } from './components/bicycling-layer.component';
import { TrafficLayerComponent } from './components/traffic-layer.component';
import { TransitLayerComponent } from './components/transit-layer.component';
import { HeatmapLayerComponent } from './components/heatmap-layer.component';
import { KmlLayerComponent } from './components/kml-layer.component';
import { DataLayerComponent } from './components/data-layer.component';
import { StreetViewPanoramaComponent } from './components/street-view-panorama.component';
import { PlacesAutoCompleteComponent } from './components/places-auto-complete.component';
import { DirectionsRendererComponent } from './components/directions-renderer.component';
import { DrawingManagerComponent } from './components/drawing-manager.component';
import { EventArgumentsComponent } from './components/event-arguments.component';
import { CustomMarkerComponent } from './components/custom-marker.component';
import { CustomMarkerNgForComponent } from './components/custom-marker-ng-for.component';
import { MapWithStreetviewComponent } from './components/map-with-streetview.component';
import { MapChangeMultiplePropertiesComponent } from './components/map-change-multiple-properties.component';
import { MarkerWithCustomIconComponent } from './components/marker-with-custom-icon.component';
import { ExperimentComponent } from './components/experiment.component';

export const routes: Routes = [
  { path: 'bicycling-layer', component: BicyclingLayerComponent },
  { path: 'data-layer', component: DataLayerComponent },
  { path: 'directions-renderer', component: DirectionsRendererComponent },
  { path: 'drawing-manager', component: DrawingManagerComponent },
  { path: 'heatmap-layer', component: HeatmapLayerComponent },
  { path: 'kml-layer', component: KmlLayerComponent },
  { path: 'map-with-options', component: MapWithOptionsComponent },
  { path: 'map-with-streetview', component: MapWithStreetviewComponent },
  { path: 'map-change-multiple-properties', component: MapChangeMultiplePropertiesComponent },
  { path: 'marker-ng-for', component: MarkerNgForComponent },
  { path: 'marker-with-custom-icon', component: MarkerWithCustomIconComponent},
  { path: 'multiple-map', component: MultipleMapComponent },
  { path: 'places-auto-complete', component: PlacesAutoCompleteComponent },
  { path: 'polygon', component: PolygonComponent },
  { path: 'simple-circle', component: SimpleCircleComponent },
  { path: 'simple-ground-overlay', component: SimpleGroundOverlayComponent },
  { path: 'simple-info-window', component: SimpleInfoWindowComponent },
  { path: 'simple-map', component: SimpleMapComponent },
  { path: 'simple-marker', component: SimpleMarkerComponent },
  { path: 'simple-polyline', component: SimplePolylineComponent },
  { path: 'street-view-panorama', component: StreetViewPanoramaComponent },
  { path: 'traffic-layer', component: TrafficLayerComponent },
  { path: 'transit-layer', component: TransitLayerComponent },
  { path: 'event-arguments', component: EventArgumentsComponent },
  { path: 'custom-marker', component: CustomMarkerComponent },
  { path: 'custom-marker-ng-for', component: CustomMarkerNgForComponent },
  { path: 'experiment', component: ExperimentComponent },
  { path: '',  redirectTo: '/simple-marker', pathMatch: 'full' },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
export const APP_ROUTER_COMPONENTS = [
  BicyclingLayerComponent,
  DataLayerComponent,
  DirectionsRendererComponent,
  DrawingManagerComponent,
  EventArgumentsComponent,
  HeatmapLayerComponent,
  KmlLayerComponent,
  MapWithOptionsComponent,
  MapWithStreetviewComponent,
  MapChangeMultiplePropertiesComponent,
  MarkerNgForComponent,
  MultipleMapComponent,
  PlacesAutoCompleteComponent,
  PolygonComponent,
  SimpleCircleComponent,
  SimpleGroundOverlayComponent,
  SimpleInfoWindowComponent,
  SimpleMapComponent,
  SimpleMarkerComponent,
  SimplePolylineComponent,
  StreetViewPanoramaComponent,
  TrafficLayerComponent,
  TransitLayerComponent,
  CustomMarkerComponent,
  CustomMarkerNgForComponent,
  MarkerWithCustomIconComponent,
  ExperimentComponent
];

