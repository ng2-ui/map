import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { OptionBuilder } from "./services/option-builder";
import { GeoCoder } from "./services/geo-coder";
import { NavigatorGeolocation } from "./services/navigator-geolocation";

import { Ng2Map } from "./services/ng2-map";
import { Ng2MapComponent } from './components/ng2-map.component';
import { Marker } from './directives/marker';
import { InfoWindow } from './components/info-window';

export {
  OptionBuilder,
  GeoCoder,
  NavigatorGeolocation,
  Ng2Map,
  Ng2MapComponent,
  Marker,
  InfoWindow
};

@NgModule({
  imports: [ CommonModule ],
  declarations: [Ng2MapComponent, Marker, InfoWindow],
  providers: [GeoCoder, NavigatorGeolocation, Ng2Map, OptionBuilder],
  exports:  [Ng2MapComponent, Marker, InfoWindow]
})
export class Ng2MapModule {}
