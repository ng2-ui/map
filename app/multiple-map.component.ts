import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Simple Map 1</h1>
    <ng2-map zoom="13" center="Brampton, Canada" scrollwheel="false">
      <marker *ngFor="let pos of positions" [position]="pos"></marker>
    </ng2-map>
    <button (click)="showRandomMarkers()">Show Random Markers</button>

    <h1>Simple Map 2</h1>
    <ng2-map center="43.99, -78.79"></ng2-map>

    <h1>Simple Map 3</h1>
    <ng2-map center="Brampton, Canada" scrollwheel="false">
      <marker position="Brampton, Canada"
        (dragstart)="log('dragstart')"
        (dragend)="log('dragend')"
        draggable="true"></marker>
    </ng2-map>
  `,
})
export class MultipleMapComponent {
  positions = [];
  showRandomMarkers() {
    let randomLat: number, randomLng: number;

    this.positions = [];
    for (let i = 0; i < 9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }

  log(txt: string) {
    console.log(txt);
  }
}
