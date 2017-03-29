import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple Map</h1>
  <ngui-map center="Brampton, Canada" 
    (mapClick)="onClick($event)"
    [fullscreenControl]="true"
    [fullscreenControlOptions]="{position: 'TOP_RIGHT'}" 
></ng2-map>
  "center" can be an;
  <ul>
    <li>lat/lng array e.g., [42.99, -77.79]
    <li> an address. e.g. Brampton, Canada
    <li> or, none(for the current position)
  </ul>
  <ngui-map center="some-invalid-location"
    [geoFallbackCenter]="[42.99, -77.79]"></ngui-map>
  
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
export class SimpleMapComponent {
  templateStr: string = templateStr;
  onClick(event) {
    if (event instanceof MouseEvent)  {
      return false;
    }
    console.log('map is clicked', event, event.target);
  }
}
