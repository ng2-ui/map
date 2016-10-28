import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple InfoWindow</h1>
    <ng2-map center="Brampton, Canada">
      <marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)"></marker>
      <info-window id="iw">
        lat: [[lat]], lng: [[lng]]
      </info-window>
    </ng2-map>
    <pre>
&lt;ng2-map center="Brampton, Canada">
  &lt;marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)">&lt;/marker>
  &lt;info-window id="iw">
    lat: [[lat]], lng: [[lng]]
  &lt;/info-window>
&lt;/ng2-map>
    </pre>
    Please click the marker to see a info window
  `,
})
export class SimpleInfoWindowComponent {
  clicked(marker) {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng(),
    });
  }
}
