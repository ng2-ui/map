import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Simple Map 1</h1>
    <ngui-map zoom="13" center="Brampton, Canada" scrollwheel="false">
      <marker *ngFor="let pos of positions" [position]="pos"></marker>
    </ngui-map>

    <h1>Simple Map 2</h1>
    <ngui-map center="43.99, -78.79"></ngui-map>

    <h1>Simple Map 3</h1>
    <ngui-map center="Brampton, Canada" scrollwheel="false">
      <marker position="Brampton, Canada"></marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class MultipleMapComponent {
  positions = [];
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText(this).subscribe(text => this.code = text);
  }
}
