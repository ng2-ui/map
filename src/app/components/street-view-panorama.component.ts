import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Simple StreetView</h1>
    <ngui-map zoom="14" center="37.869260, -122.254811" (mapReady)="mls.mapReady($event)">
      <street-view-panorama
        position="37.869260, -122.254811"
        pov="{heading: 165, pitch: 0}"
        zoom="1"
      ></street-view-panorama>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class StreetViewPanoramaComponent {
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('StreetViewPanoramaComponent').subscribe(text => this.code = text);
  }
}
