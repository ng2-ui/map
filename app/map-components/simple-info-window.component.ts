import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple InfoWindow</h1>
  <ngui-map center="Brampton, Canada">
    <marker position="Brampton, Canada" draggable="true" (click)="clicked($event)"></marker>
    <info-window id="iw">
      <div *ngIf="marker.display">
        lat: {{ marker.lat }}, lng: {{ marker.lng }}
      </div>
      <button (click)="hideMarkerInfo()">Hide Info</button>
    </info-window>
  </ngui-map>
  Please click the marker to see a info window
  
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function clicked</b> 
    <pre>{{clicked | jsCode}}</pre>
  </code>
  `;
@Component({
  template: templateStr
})
export class SimpleInfoWindowComponent {
  templateStr: string = templateStr;
  marker = {
    display: true,
    lat: null,
    lng: null,
  };

  clicked({target: marker}) {
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  hideMarkerInfo() {
    this.marker.display = !this.marker.display;
  }
}
