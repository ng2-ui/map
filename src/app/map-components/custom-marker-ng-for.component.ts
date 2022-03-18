import { of } from 'rxjs';
import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';


@Component({
  template: `
    <h1>Custom Marker With *ngFor</h1>
    <ngui-map zoom="13" center="Brampton, Canada">
      <custom-marker *ngFor="let pos of positions" [position]="pos">
        <div class="custom-icon">{{count}}</div>
      </custom-marker>
    </ngui-map>
    <button (click)="positions = getRandomMarkers()">Show Random Markers</button> <br/>
    <button (click)="showMarkersFromObservable()">Show Random Markers From Observable</button> <br/>
    <button (click)="count = count + 1">Increment</button> <br/>
    <button (click)="sc.plnkr(code)">See in plunker</button>
    <pre class="prettyprint">{{code}}</pre>
  `,
  styles: [
    `
      .custom-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color:blue;
        border: 2px solid white;
        color:white;
        font-size:20px;
        text-align:center;
      }
    `,
  ]
})
export class CustomMarkerNgForComponent {
  public positions = [];
  public count: number = 0;
  public code: string;

  constructor(public sc: SourceCodeService) {
    this.positions = this.getRandomMarkers();
    sc.getText('CustomMarkerNgForComponent').subscribe(text => this.code = text);
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
    of(this.getRandomMarkers()) // Think this as http call
      .subscribe( positions => {
        this.positions = positions;
      });
  }
}
