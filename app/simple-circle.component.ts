import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple Circle</h1>
    <ng2-map center="Brampton, Canada" scrollwheel="false">
      <circle center="Brampton, Canada"
        [strokeColor]="'#FF0000'"
        [strokeOpacity]="0.8"
        [strokeWeight]="2"
        [editable]="true"
        (circleDragstart)="log('dragstart')"
        (circleDragend)="log('dragend')"
        radius="100"
        draggable="true"></circle>
    </ng2-map>
    <pre>
&lt;ng2-map center="Brampton, Canada">
  &lt;circle center="Brampton, Canada" draggable="true" radius="100">&lt;/circle>
&lt;/ng2-map>
    </pre>
  `,
})
export class SimpleCircleComponent {
  log(str) {
    console.log('event .... >', str);
  }
}
