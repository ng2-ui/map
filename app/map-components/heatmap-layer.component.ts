import {Component, ViewChild, OnInit} from '@angular/core';
//noinspection TypeScriptCheckImport
import {HeatmapLayer} from '@ngui/map';

let templateStr = `
  <h1>Heatmap Layer</h1>
  <ngui-map zoom="13" center="37.782551, -122.445368">
    <div id="floating-panel">
      <button (click)="toggleHeatmap()">Toggle Heatmap</button>
      <button (click)="changeGradient()">Change gradient</button>
      <button (click)="changeRadius()">Change radius</button>
      <button (click)="changeOpacity()">Change opacity</button>
    </div>
    <heatmap-layer [data]="points"></heatmap-layer>
  </ngui-map>
  <button (click)="loadRandomPoints()">Load Random Points</button>
  <br/>
  <button (click)="addPoint()">Add Point</button>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function ngOnInit</b> 
    <pre>{{ ngOnInit | jsCode}}</pre>
    
    <b>function toggleHeatmap</b> 
    <pre>{{ toggleHeatmap | jsCode}}</pre>
    
    <b>function changeGradient</b> 
    <pre>{{ changeGradient | jsCode}}</pre>
    
    <b>function changeOpacity</b> 
    <pre>{{ changeOpacity | jsCode}}</pre>

    <b>function loadRandomPoints()</b> 
    <pre>{{ loadRandomPoints | jsCode}}</pre>
  </code>
`;
@Component({
  template: templateStr,
  styles: [`
    #floating-panel {
      position: absolute;
      background-color: #fff;
      border: 1px solid #999;
      font-family: 'Roboto','sans-serif';
      left: 25%;
      line-height: 30px;
      padding: 5px;
      padding-left: 10px;
      text-align: center;
      top: 10px;
      z-index: 5;
    }
  `]
})
export class HeatmapLayerComponent implements OnInit {
  @ViewChild(HeatmapLayer) heatmapLayer: HeatmapLayer;
  templateStr: string = templateStr;
  heatmap: google.maps.visualization.HeatmapLayer;
  map: google.maps.Map;
  points = [
    new google.maps.LatLng(37.782551, -122.445368),
    new google.maps.LatLng(37.782745, -122.444586),
    new google.maps.LatLng(37.782842, -122.443688)
  ];
  ngOnInit() {
    this.heatmapLayer['initialized$'].subscribe(heatmap => {
      this.heatmap = heatmap;
      this.map = this.heatmap.getMap();
    });
  }

  toggleHeatmap() {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  }

  changeGradient() {
    let gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ];
    this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
  }

  changeRadius() {
    this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
  }

  changeOpacity() {
    this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
  }

  loadRandomPoints() {
    this.points = [];

    for (let i = 0 ; i < 9; i++) {
      this.addPoint();
    }
  }

  addPoint() {
    let randomLat = Math.random() * 0.0099 + 37.782551;
    let randomLng = Math.random() * 0.0099 + -122.445368;
    let latlng = new google.maps.LatLng(randomLat, randomLng);
    this.points.push(latlng);
  }

}
