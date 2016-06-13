import { Component } from '@angular/core';
import { Ng2MapComponent, Marker, InfoWindow } from "ng2-map";

@Component({
  selector: 'my-app',
  directives: [ Ng2MapComponent, Marker, InfoWindow ],
  template: `
    <ng2-map [center]="center">
      <marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)"></marker>
      <info-window id="iw">
        lat: [[lat]], lng: [[lng]]
      </info-window>
    </ng2-map>
    center: <input [(ngModel)]="center" />
  `
})
export class AppComponent {
  public center ="Brampton, Canada";
  constructor() {}
  clicked(marker) {
    console.log('marker is clicked', marker, marker.map.mapComponent.infoWindows);
    console.log('data', {lat: marker.getPosition().lat(), lng: marker.getPosition().lng()});
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }
}
