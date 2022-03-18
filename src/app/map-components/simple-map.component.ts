import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Simple Map</h1>
    <ngui-map center="Brampton, Canada"
      (mapClick)="onClick($event)"
      [fullscreenControl]="true"
      [fullscreenControlOptions]="{position: 'TOP_RIGHT'}"></ngui-map>
    "center" can be an;
    <ul>
      <li>lat/lng array e.g., [42.99, -77.79]
      <li> an address. e.g. Brampton, Canada
      <li> or, none(for the current position)
    </ul>
    <ngui-map center="some-invalid-location"
      [geoFallbackCenter]="[42.99, -77.79]"></ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>`
})
export class SimpleMapComponent {
  code: string;
  constructor(public sc: SourceCodeService) {
    sc.getText('SimpleMapComponent').subscribe(text => this.code = text);
  }
  onClick(event) {
    if (event instanceof MouseEvent)  {
      return false;
    }
    console.log('map is clicked', event, event.target);
  }
}
