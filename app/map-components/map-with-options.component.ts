import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Map With Options - satellite view</h1>
    <ngui-map [options]="allOptions" center="36.964, -122.015"></ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class MapWithOptionsComponent {
  code: string;

  allOptions = {
    center: {lat: 36.964, lng: -122.015},
    zoom: 18,
    mapTypeId: 'satellite',
    tilt: 45
  };
  
  constructor(public sc: SourceCodeService){
    sc.getText(this).subscribe(text => this.code = text);
  }
  
}
