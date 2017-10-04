import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SourceCodeService } from '../source-code.service';
import 'rxjs/add/observable/of';

@Component({
  template: `
    <h1>Marker Wigh *ngFor</h1>
    <ngui-map zoom="13" center="Brampton, Canada">
      <marker *ngFor="let pos of positions" [position]="pos"></marker>
    </ngui-map>
    <button (click)="positions = getRandomMarkers()">Show Random Markers</button> <br/>
    <button (click)="showMarkersFromObservable()">Show Random Markers From Observable</button>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class MarkerNgForComponent {
  public positions= [];

  code: string;

  constructor(public sc: SourceCodeService) {
    this.positions = this.getRandomMarkers();
    sc.getText('MarkerNgForComponent').subscribe(text => this.code = text);
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
