import {Component, OnInit, ViewChild} from '@angular/core';
import {DirectionsRenderer} from '@ngui/map';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Directions Renderer</h1>
    <div id="floating-panel">
      <b>Start: </b>
      <select id="directions-origin"
              [(ngModel)]="direction.origin"
              (ngModelChange)="showDirection()">
        <option [ngValue]="'penn station, new york, ny'">Penn Station</option>
        <option [ngValue]="'grand central station, new york, ny'">Grand Central Station</option>
      </select>
      <b>End: </b>
      <select [(ngModel)]="direction.destination"
              (ngModelChange)="showDirection()">
        <option [ngValue]="'260 Broadway New York NY 10007'">City Hall</option>
        <option [ngValue]="'W 49th St & 5th Ave, New York, NY 10020'">Rockefeller Center</option>
      </select>
    </div>
    {{direction | json}}
    <ngui-map zoom="13" center="40.771, -73.974" (mapReady)="mls.mapReady($event)">
      <directions-renderer
        [suppressMarkers]="true"
        [draggable]="true"
        panel="#directions"
        [directionsRequest]="direction">
      </directions-renderer>
    </ngui-map>
    <div id="directions"></div>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class DirectionsRendererComponent {
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  code: string;
  direction: any = {
    origin: 'penn station, new york, ny',
    destination: '260 Broadway New York NY 10007',
    travelMode: 'WALKING'
  };

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('DirectionsRendererComponent').subscribe(text => this.code = text);
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }
}
