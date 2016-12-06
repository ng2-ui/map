import {Component, ViewChild} from '@angular/core';

@Component({
  template: `
    <h1>Data Layer</h1>
    <ng2-map zoom="4" center="-28, 137">
      <data-layer geoJson="https://storage.googleapis.com/mapsdevsite/json/google.json"></data-layer>
    </ng2-map>
  `
})
export class DataLayerComponent {
}
