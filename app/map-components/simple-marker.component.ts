import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple Marker</h1>
  <ng2-map center="Brampton, Canada" 
    [zoomControlOptions]="{position: 'TOP_CENTER'}"
    [fullscreenControl]="true"
    [fullscreenControlOptions]="{position: 'TOP_CENTER'}" 
    (click)="log($event)"
    [scrollwheel]="false"
    [loggingEnabled]="true">
    
    <marker position="will-fall-back-to-brampton-canada"
      [geoFallbackPosition]="[43.73154789999999, -79.7449296972229]"
      (dragstart)="log($event, 'dragstart')"
      (dragend)="log($event, 'dragend')"
      draggable="true">
></marker>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    <b>log function</b> 
    <pre>{{log|jsCode}}</pre>
  </code>
`;

@Component({ template: templateStr })
export class SimpleMarkerComponent {
  templateStr: string = templateStr;
  log(event, str) {
    if (event instanceof MouseEvent) {
      return false;
    }
    console.log('event .... >', event, str);
  }
}
