import {Component} from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Traffic Layer</h1>
    <ngui-map zoom="13" center="34.04924594193164, -118.24104309082031">
      <traffic-layer></traffic-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class TrafficLayerComponent {
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText(this).subscribe(text => this.code = text);
  }
}
