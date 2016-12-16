import { Component } from '@angular/core';

let templateStr = `
  <h1>Marker Wigh *ngFor</h1>
  <ng2-map zoom="13" center="Brampton, Canada">
    <marker *ngFor="let pos of positions" [position]="pos"></marker>
  </ng2-map>
  <button (click)="showRandomMarkers()">Show Random Markers</button>
  <code>
   <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    <b>function showRandomMarkers</b> 
    <pre>{{showRandomMarkers | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class MarkerNgForComponent {
  public positions= [];

  templateStr: string = templateStr;
  constructor() {
    this.showRandomMarkers();
  }

  showRandomMarkers() {
    let randomLat: number, randomLng: number;

    this.positions = [];
    for (let i = 0 ; i < 9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }
}
