import { Component, ElementRef } from '@angular/core';

let templateStr: string = `
  <h1>Simple Marker</h1>
  <ng2-map center="Brampton, Canada" [scrollwheel]="false">
    <marker position="Brampton, Canada"
      (dragstart)="log('dragstart')"
      (dragend)="log('dragend')"
      draggable="true"></marker>
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
  log(str) {
    console.log('event .... >', str);
  }
}
