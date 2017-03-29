import { Component } from '@angular/core';

let templateStr: string = `
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
  <ngui-map center="Brampton, Canada" scrollwheel="false">
    <map-circle center="Brampton, Canada"
      [strokeColor]="'#FF0000'"
      [strokeOpacity]="0.8"
      [strokeWeight]="2"
      [editable]="true"
      radius="100"
      draggable="true"></map-circle>
  </ngui-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class SimpleCircleComponent {
  templateStr: string = templateStr;
}
