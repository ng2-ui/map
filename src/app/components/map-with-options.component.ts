import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Map With Options - satellite view</h1>
    <ngui-map [options]="allOptions" (mapReady)="mls.mapReady($event)"></ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class MapWithOptionsComponent {
  code: string;

  allOptions = {
    center: {lat: 36.964, lng: -122.015},
    zoom: 18,
    mapTypeId: 'satellite',
    tilt: 45
  };

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('MapWithOptionsComponent').subscribe(text => this.code = text);
  }

}
