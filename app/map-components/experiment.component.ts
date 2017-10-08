import { Component, ChangeDetectorRef } from '@angular/core';
declare let google: any;
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h3 *ngFor="let pos of positions">{{pos}}</h3>
    <ngui-map zoom="14" center="Brampton, Canada">
      <heatmap-layer dissipating="true" radius="25"
        (initialized$)="onHeatmapInitialized($event)"></heatmap-layer>
      <marker *ngFor="let pos of positions" [position]="pos"></marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `})
export class ExperimentComponent {
  positions = [];
  heatmap: any;
  code: string;

  constructor(private cdr: ChangeDetectorRef, public sc: SourceCodeService) {
    sc.getText('ExperimentComponent').subscribe(text => this.code = text);
  }

  onHeatmapInitialized = (evt) => {
    this.heatmap = evt;

    let randomLat = Math.random() * 0.0099 + 43.7250;
    let randomLon = Math.random() * 0.0099 + -79.7699;

    let values = [];
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    values.push(new google.maps.LatLng(randomLat, randomLon));
    this.heatmap.setData(values);

    this.positions.push([43.72723792568628, -79.7657115210506]);
    this.positions.push([randomLat, randomLon]);
    console.log(this.positions);
    this.cdr.detectChanges();
  }

}
