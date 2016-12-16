import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Simple Circle</h1>
  <ng2-map center="Brampton, Canada" scrollwheel="false">
    <circle center="Brampton, Canada"
      [strokeColor]="'#FF0000'"
      [strokeOpacity]="0.8"
      [strokeWeight]="2"
      [editable]="true"
      (dragstart)="log('dragstart')"
      (dragend)="log('dragend')"
      radius="100"
      draggable="true"></circle>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>log function</b> 
    <pre>{{log | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class SimpleCircleComponent {
  templateStr: string = templateStr;

  log(str) {
    console.log('event .... >', str);
  }
}
