import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let templateStr = `
  <h1>Marker Wigh *ngFor</h1>
  <ngui-map zoom="13" center="Brampton, Canada">
    <marker *ngFor="let pos of positions" [position]="pos"></marker>
  </ngui-map>
  <button (click)="positions = getRandomMarkers()">Show Random Markers</button> <br/>
  <button (click)="showMarkersFromObservable()">Show Random Markers From Observable</button>
  <code>
   <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    <b>function getRandomMarkers</b> 
    <pre>{{getRandomMarkers | jsCode}}</pre>
    <b>function showMarkersFromObservable</b> 
    <pre>{{showMarkersFromObservable | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class MarkerNgForComponent {
  public positions= [];

  templateStr: string = templateStr;
  constructor() {
    this.positions = this.getRandomMarkers();
  }

  getRandomMarkers() {
    let randomLat: number, randomLng: number;

    let positions = [];
    for (let i = 0 ; i < 9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      positions.push([randomLat, randomLng]);
    }
    return positions;
  }

  showMarkersFromObservable() {
    Observable.of(this.getRandomMarkers()) // Think this as http call
      .subscribe( positions => {
        this.positions = positions;
      });
  }
}
