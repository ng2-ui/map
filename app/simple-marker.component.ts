import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple Marker</h1>
    <ng2-map center="Brampton, Canada" scrollwheel="false">
      <marker position="Brampton, Canada"
        (dragstart)="log('dragstart')"
        (dragend)="log('dragend')"
        draggable="true"></marker>
    </ng2-map>
    <pre>
&lt;ng2-map center="Brampton, Canada">
  &lt;marker position="Brampton, Canada" draggable="true">&lt;/marker>
&lt;/ng2-map>
    </pre>
  `,
})
export class SimpleMarkerComponent {
  log(str) {
    console.log('event .... >', str);
  }
}
