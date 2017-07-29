import {Component, ChangeDetectorRef} from '@angular/core';

let templateStr = `
  <h1>Place Autocomplete Address Form</h1>
  <input places-auto-complete
    (place_changed)="placeChanged($event)"
    [types]="['geocode']" />
  <p>
  <ngui-map [center]="center"></ngui-map>
  place: {{address | json}}
  </p>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function placeChanged</b> 
    <pre>{{placeChanged | jsCode}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class PlacesAutoCompleteComponent {
  autocomplete: any;
  address: any = {};
  templateStr: string = templateStr;
  center: any;

  constructor(private ref: ChangeDetectorRef) {}

  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  placeChanged(place) {
    this.center = place.geometry.location;
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;
    }
    this.ref.detectChanges();
  }
}
