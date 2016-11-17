import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple Polyine</h1>
    <ng2-map zoom="3" center="0, -180" mapTypeId="terrain" scrollwheel="false">
      <polyline [editable]="true"
        [path]="path"
        [geodesic]="true"
        [strokeColor]="'#FF0000'"
        [strokeOpacity]="1"
        [strokeWeight]="2"></polyline>
    </ng2-map>
<pre>
  &lt;ng2-map zoom="3" center="0, -180" mapTypeId="terrain" scrollwheel="false">
    &lt;polyline [editable]="true"
      [path]="path"
      [geodesic]="true"
      [strokeColor]="'#FF0000'"
      [strokeOpacity]="1"
      [strokeWeight]="2">&lt;/polyline>
  &lt;/ng2-map>
</pre>
  `,
})
export class SimplePolylineComponent {
  path = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
}
