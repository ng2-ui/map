import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Bicycling Layer</h1>
    <ngui-map zoom="14"
              (mapReady)="mls.mapReady($event)"
              center="42.3726399, -71.1096528">
      <bicycling-layer></bicycling-layer>
    </ngui-map>
    <button (click)="sc.plnkr(code)">See in plunker</button>
    <pre class="prettyprint">{{code}}</pre>`
})
export class BicyclingLayerComponent {
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('BicyclingLayerComponent').subscribe(text => this.code = text);
  }
}
