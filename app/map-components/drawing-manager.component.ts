import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Drawing Manager</h1>
  <ng2-map zoom="8" center="-34.397, 150.644">
    <drawing-manager
      [drawingMode]="OverlayType.MARKER"
      [drawingControl]="true"
      [drawingControlOptions]="{
        position: ControlPosition.TOP_CENTER,
        drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
       }"
      [markerOptions]="{icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}"
      [circleOptions]="{
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }"></drawing-manager>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class DrawingManagerComponent {
  templateStr: string = templateStr;
}
