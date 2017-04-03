import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Custom Marker</h1>
  <ng2-map center="Brampton, Canada" 
   [loggingEnabled]="false">
    <custom-marker position="Brampton, Canada">
      <div><b>Hi, USA</b>
        <img src="http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/32/USA-icon.png" />
      </div>
    </custom-marker>
    <marker position="Brampton, Canada"></marker>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>    
  </code>
`;

@Component({ template: templateStr })
export class CustomMarkerComponent {
  templateStr: string = templateStr;
}
