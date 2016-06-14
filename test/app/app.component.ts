import { Component } from '@angular/core';
import { Ng2MapComponent, Marker, InfoWindow } from "ng2-map";

@Component({
  selector: 'my-app',
  directives: [ Ng2MapComponent, Marker, InfoWindow ],
  template: document.querySelector('#my-app-template').innerHTML
})
export class AppComponent {
  public center ="Brampton, Canada";
  public positions=[];
  constructor() {}

  clicked(marker) {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }

  showRandomMarkers() {
    let randomLat: number, randomLng: number;
    
    this.positions = [];
    for (let i=0; i<9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }
}
