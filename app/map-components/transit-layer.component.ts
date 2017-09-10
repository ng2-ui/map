import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Transit Layer</h1>
    <ngui-map zoom="13" center="51.501904, -0.115871">
      <transit-layer></transit-layer>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class TransitLayerComponent {
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText('TransitLayerComponent').subscribe(text => this.code = text);
  }
}
