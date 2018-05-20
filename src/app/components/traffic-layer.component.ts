import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Traffic Layer</h1>
    <ngui-map zoom="13" center="34.04924594193164, -118.24104309082031" (mapReady)="mls.mapReady($event)">
      <traffic-layer></traffic-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class TrafficLayerComponent {
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('TrafficLayerComponent').subscribe(text => this.code = text);
  }
}
