import { Component } from '@angular/core';

let templateStr = `
  <h1>Map With StreetView</h1>
  <ngui-map 
    center="40.6892,-74.0444"
    zoom="18"
    map-type-id="MapTypeId.SATELLITE"
    tilt="45"
    streetView="StreetViewPanorama(document.querySelector('div#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})">
  </ngui-map>
  <div id="sv"></div> 
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr,
  styles: [`#sv {width: 50%; height: 300px} ngui-map {width: 50%}`]
})
export class MapWithStreetviewComponent {
  templateStr: string = templateStr;
}
