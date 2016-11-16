import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SimpleInfoWindowComponent } from './simple-info-window.component';
import { SimpleMapComponent } from './simple-map.component';
import { SimpleCircleComponent } from './simple-circle.component';
import { SimpleMarkerComponent } from './simple-marker.component';
import { MarkerNgForComponent } from './marker-ng-for.component';
import { MultipleMapComponent } from './multiple-map.component';
import { PolygonComponent } from './polygon.component';
import { MapWithOptionsComponent } from "./map-with-options.component";
import { SimplePolylineComponent } from "./simple-polyline.component";
import { SimpleGroundOverlayComponent } from "./simple-ground-overlay.component";

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
  SimpleGroundOverlayComponent
];

