import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Kml Layer</h1>
    <ngui-map zoom="11" center="41.876, -87.624" (mapReady)="mls.mapReady($event)">
      <kml-layer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"></kml-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class KmlLayerComponent {
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('KmlLayerComponent').subscribe(text => this.code = text);
  }
}
