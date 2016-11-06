import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionBuilder } from './services/option-builder';
import { GeoCoder } from './services/geo-coder';
import { NavigatorGeolocation } from './services/navigator-geolocation';

import { Ng2Map } from './services/ng2-map';
import { Ng2MapComponent } from './components/ng2-map.component';
import { Marker } from './directives/marker';
import { Circle } from './directives/circle';
import { InfoWindow } from './components/info-window';

export {
  OptionBuilder,
  GeoCoder,
  NavigatorGeolocation,
  Ng2Map,
  Ng2MapComponent,
  Marker,
  Circle,
  InfoWindow
};

@NgModule({
  imports: [ CommonModule ],
  declarations: [Ng2MapComponent, Marker, Circle, InfoWindow],
  providers: [GeoCoder, NavigatorGeolocation, Ng2Map, OptionBuilder],
  exports: [Ng2MapComponent, Marker, Circle, InfoWindow],
})
export class Ng2MapModule {}
