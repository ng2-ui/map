import { Component } from '@angular/core';

let templateStr = `
  <h1>Simple Map 1</h1>
  <ng2-map zoom="13" center="Brampton, Canada" scrollwheel="false">
    <marker *ngFor="let pos of positions" [position]="pos"></marker>
  </ng2-map>

  <h1>Simple Map 2</h1>
  <ng2-map center="43.99, -78.79"></ng2-map>

  <h1>Simple Map 3</h1>
  <ng2-map center="Brampton, Canada" scrollwheel="false">
    <marker position="Brampton, Canada"></marker>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class MultipleMapComponent {
  positions = [];
  templateStr: string = templateStr;
}
