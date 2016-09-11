import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SimpleInfoWindowComponent } from "./simple-info-window.component";
import { SimpleMapComponent } from "./simple-map.component";
import { SimpleMarkerComponent } from "./simple-marker.component";
import { MarkerNgForComponent } from "./marker-ng-for.component";

export const routes: Routes = [
  { path: 'simple-info-window', component: SimpleInfoWindowComponent},
  { path: 'simple-map', component: SimpleMapComponent},
  { path: 'simple-marker', component: SimpleMarkerComponent},
  { path: 'marker-ng-for', component: MarkerNgForComponent},
  { path: '',  redirectTo: '/simple-marker', pathMatch: 'full'}
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);

