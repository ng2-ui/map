import {Component} from '@angular/core';

let templateStr = `
  <h1>Kml Layer</h1>
  <ngui-map zoom="11" center="41.876, -87.624">
    <kml-layer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"></kml-layer>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class KmlLayerComponent {
  templateStr: string = templateStr;
}
