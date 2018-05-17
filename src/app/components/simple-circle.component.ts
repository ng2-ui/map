import { Component } from '@angular/core';
import { SourceCodeService } from '../services/source-code.service';

@Component({
  template: `
    <h1>Simple Circle</h1>
    <ngui-map center="Brampton, Canada" scrollwheel="false">
      <circle center="Brampton, Canada"
        [strokeColor]="'#FF0000'"
        [strokeOpacity]="0.8"
        [strokeWeight]="2"
        [editable]="true"
        radius="100"
        draggable="true"></circle>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>`
})
export class SimpleCircleComponent {
  code: string;
  constructor(public sc: SourceCodeService) {
    sc.getText('SimpleCircleComponent').subscribe(text => this.code = text);
  }
}
