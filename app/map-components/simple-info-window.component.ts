import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
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
    
    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
    `})
export class SimpleInfoWindowComponent {
  marker = {
    display: true,
    lat: null,
    lng: null,
  };
  code: string;

  constructor(public sc: SourceCodeService){
    sc.getText('SimpleInfoWindowComponent').subscribe(text => this.code = text);
  }

  clicked({target: marker}) {
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  hideMarkerInfo() {
    this.marker.display = !this.marker.display;
  }
}
