import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Polygon</h1>
  <ngui-map zoom="5" center="24.886, -70.268" scrollwheel="false">
    <polygon [editable]="true"
      [paths]="paths"
      [strokeColor]="'#FFC107'"
      [strokeOpacity]="0.8"
      [strokeWeight]="2"
      [fillColor]="'#FFC107'"
      [fillOpacity]="0.35"></polygon>
  </ngui-map>
  <ngui-map zoom="5" center="24.886, -70.268" scrollwheel="false">
    <map-polygon [editable]="true"
      [paths]="paths"
      [strokeColor]="'#FFC107'"
      [strokeOpacity]="0.8"
      [strokeWeight]="2"
      [fillColor]="'#FFC107'"
      [fillOpacity]="0.35"></map-polygon>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>paths </b> 
    <pre>{{paths | json | jsCode}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class PolygonComponent {
  templateStr: string = templateStr;

  paths = [[
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757}
  ], [
    {lat: 28.745, lng: -70.579},
    {lat: 29.570, lng: -67.514},
    {lat: 27.339, lng: -66.668}
  ]];
}
