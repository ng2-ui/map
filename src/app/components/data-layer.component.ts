import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Data Layer</h1>
    <ngui-map zoom="4" center="-28, 137" (mapReady)="mls.mapReady($event)">
      <data-layer geoJsonUrl="https://storage.googleapis.com/mapsdevsite/json/google.json"></data-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class DataLayerComponent {
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('DataLayerComponent').subscribe(text => this.code = text);
  }
}
