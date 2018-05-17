import { Component } from '@angular/core';
import { SourceCodeService } from '../services/source-code.service';

@Component({
  template: `
    <h1>Simple Polyine</h1>
    <ngui-map zoom="3" center="0, -180" mapTypeId="terrain" scrollwheel="false">
      <polyline [editable]="true"
        [path]="path"
        [geodesic]="true"
        [strokeColor]="'#FF0000'"
        [strokeOpacity]="1"
        [strokeWeight]="2"></polyline>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class SimplePolylineComponent {
  path = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
  code: string;

  constructor(public sc: SourceCodeService) {
    sc.getText('SimplePolylineComponent').subscribe(text => this.code = text);
  }
}
