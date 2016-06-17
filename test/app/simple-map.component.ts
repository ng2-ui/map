import {Component} from '@angular/core';
import {NG2_MAP_DIRECTIVES} from 'ng2-map';

@Component({
  directives: [NG2_MAP_DIRECTIVES],
  template: `
    <h1>Simple Map</h1>
    <ng2-map center="Brampton, Canada"></ng2-map>
    <pre>&lt;ng2-map center="Brampton, Canada">&lt;/ng2-map></pre>
    "center" can be an;
    <ul>
      <li>lat/lng array e.g., [42.99, -77.79]
      <li> an address. e.g. Brampton, Canada
      <li> or, none(for the current position)
    </ul>
  `
})
export class TestComponent{
}