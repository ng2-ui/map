import {Component, ChangeDetectorRef} from '@angular/core';

@Component({
  template: `
    <h1>Place Autocomplete Address Form</h1>
    <input places-auto-complete
      (initialized$)="initialized($event)"
      (place_changed)="placeChanged(place)"
      [types]="['geocode']" />
    <pre>
    {{address | json}}
    </pre>
  `,
})
export class PlacesAutoCompleteComponent {
  autocomplete: google.maps.places.Autocomplete;
  address: any = {};

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
