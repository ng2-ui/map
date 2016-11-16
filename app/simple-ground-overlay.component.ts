import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple Ground Overlay</h1>
    <ng2-map zoom="12" center="40.740, -74.18" scrollwheel="false">
      <ground-overlay 
        url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
        [bounds]="bounds"
        [opacity]="0.8"
        [clickable]="true"></ground-overlay>
    </ng2-map>
<pre>
    &lt;ng2-map zoom="12" center="40.740, -74.18" scrollwheel="false">
      &lt;ground-overlay 
        url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
        [bounds]="bounds"
        [opacity]="0.8"
        [clickable]="true">&lt;/ground-overlay>
    &lt;/ng2-map>
</pre>
  `,
})
export class SimpleGroundOverlayComponent {
  bounds = { north: 40.773941, south: 40.712216, east: -74.12544, west: -74.22655 };
}
