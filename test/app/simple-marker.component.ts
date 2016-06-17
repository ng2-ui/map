import {Component} from '@angular/core';
import {NG2_MAP_DIRECTIVES} from 'ng2-map';

@Component({
  directives: [NG2_MAP_DIRECTIVES],
  template: `
    <h1>Simple Marker</h1>
    <ng2-map center="Brampton, Canada">
      <marker position="Brampton, Canada" draggable="true"></marker>
    </ng2-map>
    <pre>
&lt;ng2-map center="Brampton, Canada">
  &lt;marker position="Brampton, Canada" draggable="true">&lt;/marker>
&lt;/ng2-map>
    </pre>
  `
})
export class TestComponent{
}