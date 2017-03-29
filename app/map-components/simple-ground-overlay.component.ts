import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple Ground Overlay</h1>
  <ngui-map zoom="12" center="40.740, -74.18" scrollwheel="false">
    <ground-overlay 
      url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
      [bounds]="bounds"
      [opacity]="0.8"
      [clickable]="true"></ground-overlay>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>bounds</b> 
    <pre>{{bounds | json | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class SimpleGroundOverlayComponent {
  templateStr: string = templateStr;
  bounds = { north: 40.773941, south: 40.712216, east: -74.12544, west: -74.22655 };
}
