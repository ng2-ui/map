import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Map With StreetView</h1>
    <ngui-map 
      center="40.6892,-74.0444"
      zoom="18"
      map-type-id="MapTypeId.SATELLITE"
      tilt="45"
      streetView="StreetViewPanorama(document.querySelector('div#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})">
    </ngui-map>
    <div id="sv"></div> 

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `,
  styles: [`#sv {width: 50%; height: 300px} ngui-map {width: 50%; float: left}`]
})
export class MapWithStreetviewComponent {
  code: string;

  constructor(public sc: SourceCodeService){
    sc.getText(this).subscribe(text => this.code = text);
  }
  
}
