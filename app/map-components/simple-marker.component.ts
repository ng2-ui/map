import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({ 
  template: `
    <h1>Simple Marker</h1>
    <ngui-map center="Brampton, Canada" 
      [zoomControlOptions]="{position: 'TOP_CENTER'}"
      [fullscreenControl]="true"
      [fullscreenControlOptions]="{position: 'TOP_CENTER'}" 
      (click)="log($event)"
      [scrollwheel]="false">
      <marker position="will-fall-back-to-brampton-canada"
        [geoFallbackPosition]="[43.73154789999999, -79.7449296972229]"
        (dragstart)="log($event, 'dragstart')"
        (dragend)="log($event, 'dragend')"
        draggable="true"></marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>
    
    <pre class="prettyprint">{{code}}</pre>`
})
export class SimpleMarkerComponent {
  code: string;
  constructor(public sc: SourceCodeService){
    sc.getText('SimpleMarkerComponent').subscribe(text => this.code = text);
  }
  log(event, str) {
    if (event instanceof MouseEvent) {
      return false;
    }
    console.log('event .... >', event, str);
  }
}
