import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Event Arguments</h1>
    Implementation of https://developers.google.com/maps/documentation/javascript/examples/event-arguments
    <br/><br/>
    Click the map to add marker and center it.
    <ngui-map zoom="4" center="-25.363882, 131.044922" (click)="onClick($event)" (mapReady)="mls.mapReady($event)">
      <marker *ngFor="let pos of positions" [position]="pos"></marker>
    </ngui-map>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class EventArgumentsComponent {
  positions: any[] = [];
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('EventArgumentsComponent').subscribe(text => this.code = text);
  }

  onClick(event) {
    if (event instanceof MouseEvent) return;
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
}
