import { Component, ElementRef } from '@angular/core';

let templateStr: string = `
  <h1>Marker With Custom Icon</h1>
  <ng2-map center="Brampton, Canada">
    <marker position="Brampton, Canada"
     [icon]="{
       url: 'https://plnkr.co/img/plunker.png',
       anchor: [16,16],
       size: [32,32],
       scaledSize: [32,32]
     }">
    </marker>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;

@Component({ template: templateStr })
export class MarkerWithCustomIconComponent {
  templateStr: string = templateStr;
}
