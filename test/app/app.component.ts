import { Component } from '@angular/core';
import { Ng2MapComponent } from "ng2-map";
import { Marker } from "ng2-map";

@Component({
  selector: 'my-app',
  directives: [ Ng2MapComponent, Marker ],
  template: `
    <ng2-map [center]="center">
      <marker position="Brampton, Canada" (markerClick)="clicked($event)"></marker>
    </ng2-map>
    center: <input [(ngModel)]="center" />
  `
})
export class AppComponent {
  public center ="Brampton, Canada";
  constructor() {}
  clicked(marker) {
    console.log('marker is clicked', marker, marker.map);
  }
}
