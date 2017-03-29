import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple InfoWindow</h1>
  <ngui-map center="Brampton, Canada">
    <marker position="Brampton, Canada" draggable="true" (click)="clicked($event)"></marker>
    <info-window id="iw">
      lat: [[lat]], lng: [[lng]]
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
  clicked(event) {
    let marker = event.target;
    marker.nguiMapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng(),
    });
  }
}
