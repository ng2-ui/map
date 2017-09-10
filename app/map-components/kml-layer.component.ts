import {Component} from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Kml Layer</h1>
    <ngui-map zoom="11" center="41.876, -87.624">
      <kml-layer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"></kml-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class KmlLayerComponent {
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText(this).subscribe(text => this.code = text);
  }
}
