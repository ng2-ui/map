import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple StreetView</h1>
  <ngui-map zoom="14" center="37.869260, -122.254811">
    <street-view-panorama
      position="37.869260, -122.254811"
      pov="{heading: 165, pitch: 0}"
      zoom="1"
    ></street-view-panorama>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class StreetViewPanoramaComponent {
  templateStr: string = templateStr;
}
