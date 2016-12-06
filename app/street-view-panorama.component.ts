import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple StreetView</h1>
    <ng2-map zoom="14" center="37.869260, -122.254811">
      <street-view-panorama
        position="37.869260, -122.254811"
        pov="{heading: 165, pitch: 0}"
        zoom="1"
      ></street-view-panorama>
    </ng2-map>
  `,
})
export class StreetViewPanoramaComponent {}
