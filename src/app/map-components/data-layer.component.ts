import {Component} from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Data Layer</h1>
    <ngui-map zoom="4" center="-28, 137">
      <data-layer geoJsonUrl="https://storage.googleapis.com/mapsdevsite/json/google.json"></data-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class DataLayerComponent {
  code: string;
  constructor(public sc: SourceCodeService) {
    sc.getText('DataLayerComponent').subscribe(text => this.code = text);
  }
}
