import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Bicycling Layer</h1>
    <ng2-map zoom="14" center="42.3726399, -71.1096528">
      <bicycling-layer></bicycling-layer>
    </ng2-map>
<pre>
&lt;ng2-map zoom="14" center="42.3726399, -71.1096528">
  &lt;bicycling-layer>&lt;/bicycling-layer>
&lt;/ng2-map>
</pre>
  `,
})
export class BicyclingLayerComponent {}
