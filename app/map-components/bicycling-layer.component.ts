import { Component } from '@angular/core';

let templateStr = `
  <h1>Bicycling Layer</h1>
  <ngui-map zoom="14" center="42.3726399, -71.1096528">
    <bicycling-layer></bicycling-layer>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class BicyclingLayerComponent {
  templateStr: string = templateStr;
}
