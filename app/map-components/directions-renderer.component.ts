import {Component, ViewChild, ChangeDetectorRef, OnInit} from '@angular/core';
//noinspection TypeScriptCheckImport
import { DirectionsRenderer } from '@ngui/map';

let templateStr = `
  <h1>Directions Renderer</h1>
  <div id="floating-panel">
  <b>Start: </b>
  <select [ngModel]="direction.origin"
   (ngModelChange)="direction.origin = $event; showDirection()">
    <option [ngValue]="'penn station, new york, ny'">Penn Station</option>
    <option [ngValue]="'grand central station, new york, ny'">Grand Central Station</option>
  </select>
  <b>End: </b>
  <select [ngModel]="direction.destination"
   (ngModelChange)="direction.destination = $event; showDirection()">
    <option [ngValue]="'260 Broadway New York NY 10007'">City Hall</option>
    <option [ngValue]="'W 49th St & 5th Ave, New York, NY 10020'">Rockefeller Center</option>
  </select>
  </div>
  {{direction | json}}
  <ngui-map zoom="13" center="40.771, -73.974">
    <directions-renderer
      [suppressMarkers]="true"
      [draggable]="true"
      panel="#my-panel"
      (directions_changed)="directionsChanged()"
      [directions-request]="direction">
    </directions-renderer>
  </ngui-map>
  <div id="my-panel"></div>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function ngOnInit</b> 
    <pre>{{ngOnInit | jsCode}}</pre>
    
    <b>function directionsChanged</b> 
    <pre>{{directionsChanged | jsCode}}</pre>
    
    <b>function showDirection</b> 
    <pre>{{showDirection | jsCode}}</pre>
  </code>
  directionsResult:<pre> {{directionsResult | json}}</pre>
`;

@Component({
  template: templateStr
})
export class DirectionsRendererComponent implements OnInit {
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  templateStr: string = templateStr;
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction: any = {
    origin: 'penn station, new york, ny',
    destination: '260 Broadway New York NY 10007',
    travelMode: 'WALKING'
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.directionsRendererDirective['initialized$'].subscribe( directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }
}
