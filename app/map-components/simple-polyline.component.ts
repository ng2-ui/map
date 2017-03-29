import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple Polyine</h1>
  <ngui-map zoom="3" center="0, -180" mapTypeId="terrain" scrollwheel="false">
    <polyline [editable]="true"
      [path]="path"
      [geodesic]="true"
      [strokeColor]="'#FF0000'"
      [strokeOpacity]="1"
      [strokeWeight]="2"></polyline>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    <b>path</b> 
    <pre>{{path | json | jsCode}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class SimplePolylineComponent {
  templateStr: string = templateStr;
  path = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
}
