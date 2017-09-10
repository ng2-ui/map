import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({ 
  template: `
    <h1>Custom Marker</h1>
    <ngui-map center="Brampton, Canada">
      <custom-marker position="Brampton, Canada">
        <div><b>Hi, USA</b>
          <img src="http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/32/USA-icon.png" />
        </div>
      </custom-marker>
      <marker position="Brampton, Canada"></marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})

export class CustomMarkerComponent {
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText('CustomMarkerComponent').subscribe(text => this.code = text);
  }
}
