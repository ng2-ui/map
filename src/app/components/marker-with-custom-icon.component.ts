import { Component } from '@angular/core';
import { SourceCodeService } from '../services/source-code.service';

@Component({
  template: `
    <h1>Marker With Custom Icon</h1>
    <ngui-map center="Brampton, Canada">
      <marker position="Brampton, Canada"
       [icon]="{
         url: 'https://plnkr.co/img/plunker.png',
         anchor: [16,16],
         size: [32,32],
         scaledSize: [32,32]
       }">
      </marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class MarkerWithCustomIconComponent {
  code: string;
  constructor(public sc: SourceCodeService) {
    sc.getText('MarkerWithCustomIconComponent').subscribe(text => this.code = text);
  }
}
