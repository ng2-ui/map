import {Component} from '@angular/core';
import {SourceCodeService} from '../services/source-code.service';
import {MapListenerService} from '../services/map-listener.service';

@Component({
  template: `
    <h1>Place Autocomplete Address Form</h1>
    <input places-auto-complete
           (place_changed)="placeChanged($event)"
           [types]="['geocode']"/>
    <p>
      <ngui-map [center]="center" (mapReady)="mls.mapReady($event)"></ngui-map>
      place: {{address | json}}
    </p>

    <button (click)="sc.plnkr(code)">See in plunker</button>

    <pre class="prettyprint">{{code}}</pre>
  `
})
export class PlacesAutoCompleteComponent {
  autocomplete: any;
  address: any = {};
  center: any;
  code: string;

  constructor(public sc: SourceCodeService, public mls: MapListenerService) {
    sc.getText('PlacesAutoCompleteComponent').subscribe(text => this.code = text);
  }

  placeChanged(place) {
    this.center = place.geometry.location;
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;
    }
  }
}
