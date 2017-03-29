import { Component } from '@angular/core';

let templateStr: string = `
  <h1>Map Change Multiple Properties</h1>
  <ngui-map 
    [center]="mapProps.center"
    [zoom]="mapProps.zoom"
    (idle)="onIdle($event)"
    [geoFallbackCenter]="[42.99, -77.79]"></ngui-map>
  <div> center: {{mapInfo.center}},  zoom: {{mapInfo.zoom}} </div>
  <button id="change-props"
    (click)="mapProps = {center: 'New York', zoom: 8}">
    Change Multiple Map Props
  </button>
  
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class MapChangeMultiplePropertiesComponent {
  templateStr: string = templateStr;
  mapProps: any = {
    center: 'some-invalid-location',
    zoom: 11
  };
  mapInfo: any = {};

  onIdle(event) {
    let map = event.target;
    this.mapInfo.center = [map.getCenter().lat(), map.getCenter().lng()];
    this.mapInfo.zoom = map.getZoom();
  }
}
