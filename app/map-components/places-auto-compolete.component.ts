import {Component, ChangeDetectorRef} from '@angular/core';

let templateStr = `
  <h1>Place Autocomplete Address Form</h1>
  <input places-auto-complete
    (initialized$)="initialized($event)"
    (place_changed)="placeChanged(place)"
    [types]="['geocode']" />
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
    
    <b>function initialized</b> 
    <pre>{{initialized | jsCode}}</pre>
    
    <b>function placeChanged</b> 
    <pre>{{placeChanged | jsCode}}</pre>
  </code>
`;

@Component({
  template: templateStr
})
export class PlacesAutoCompleteComponent {
  autocomplete: google.maps.places.Autocomplete;
  address: any = {};
  templateStr: string = templateStr;

  constructor(private ref: ChangeDetectorRef) {}

  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  placeChanged() {
    let place = this.autocomplete.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;
    }
    this.ref.detectChanges();
  }
}
