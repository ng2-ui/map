import {Component} from '@angular/core';

let templateStr: string = `
  <h1>Traffic Layer</h1>
  <ngui-map zoom="13" center="34.04924594193164, -118.24104309082031">
    <traffic-layer></traffic-layer>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class TrafficLayerComponent {
  templateStr: string = templateStr;
}
