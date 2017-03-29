import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Transit Layer</h1>
  <ngui-map zoom="13" center="51.501904, -0.115871">
    <transit-layer></transit-layer>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class TransitLayerComponent {
  templateStr: string = templateStr;
}
