import {Type} from '@angular/core';

/* Is there a better way to import all? */
import { Ng2MapComponent } from './components/ng2-map.component';
import { Marker } from './directives/marker';
import { InfoWindow } from './components/info-window';

/* Is there a better way to export all? */
export { Ng2MapComponent } from './components/ng2-map.component';
export { Marker } from './directives/marker';
export { InfoWindow } from './components/info-window';

export const NG2_MAP_DIRECTIVES: Type[] = [
  Ng2MapComponent,
  Marker,
  InfoWindow
];
