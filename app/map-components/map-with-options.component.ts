import { Component } from '@angular/core';

let templateStr = `
  <h1>Map With Options - satellite view</h1>
  <ngui-map [options]="allOptions" center="36.964, -122.015"></ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    <b>allOptions</b> 
    <pre>{{allOptions | json | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class MapWithOptionsComponent {
  templateStr: string = templateStr;
  allOptions = {
    center: {lat: 36.964, lng: -122.015},
    zoom: 18,
    mapTypeId: 'satellite',
    tilt: 45
  };
}
