import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Simple Ground Overlay</h1>
    <ngui-map zoom="12" center="40.740, -74.18" scrollwheel="false" (mapReady)="mls.mapReady($event)">
      <ground-overlay
        url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
        [bounds]="bounds"
        [opacity]="0.8"
        [clickable]="true"></ground-overlay>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class SimpleGroundOverlayComponent {
  bounds = {north: 40.773941, south: 40.712216, east: -74.12544, west: -74.22655};
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('SimpleGroundOverlayComponent').subscribe(text => this.code = text);
  }
}
