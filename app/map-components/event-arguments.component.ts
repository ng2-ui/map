import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Event Arguments</h1>
  Implementation of https://developers.google.com/maps/documentation/javascript/examples/event-arguments
  <br/><br/>
  Click the map to add marker and center it.
  <ngui-map zoom="4" center="-25.363882, 131.044922" (click)="onClick($event)">
    <marker *ngFor="let pos of positions" [position]="pos"></marker>
  </ngui-map>
  
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function onClick</b> 
    <pre>{{onClick | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class EventArgumentsComponent {
  templateStr: string = templateStr;
  positions: any[] = [];

  onClick(event) {
    if (event instanceof MouseEvent) return;
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
}
