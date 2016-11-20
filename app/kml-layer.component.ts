import {Component, ViewChild} from '@angular/core';

@Component({
  template: `
    <h1>Kml Layer</h1>
    <ng2-map zoom="11" center="41.876, -87.624">
      <kml-layer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"></kml-layer>
    </ng2-map>
  `,
})
export class KmlLayerComponent {
}
