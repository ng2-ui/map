import {
  Input,
  Output,
  Directive,
  EventEmitter,
  ElementRef
} from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2MapComponent } from '../components/ng2-map.component';

@Directive({
  selector: '[places-auto-complete]'
})
export class PlacesAutoComplete  {

  @Input('bounds') bounds: any;
  @Input('componentRestrictions') componentRestrictions: any;
  @Input('types') types: string[];

  @Output('place_changed') place_changed: EventEmitter<any> = new EventEmitter();
  @Output('initialized$')  initialized$: EventEmitter<any> = new EventEmitter();

  public objectOptions: any;
  public autocomplete: google.maps.places.Autocomplete;

  constructor(
    public optionBuilder: OptionBuilder,
    public elementRef: ElementRef
  ) {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
      this.addGoogleMapsApi();
    } else {
      this.initialize();
    }
  }

  // only called when map is ready
  initialize = (): void => {
    this.objectOptions =
      this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], this);
    console.log('places autocomplete options', this.objectOptions);

    this.autocomplete = new google.maps.places.Autocomplete(
      this.elementRef.nativeElement,
      this.objectOptions
    );
    console.log('this.autocomplete', this.autocomplete);

    this.autocomplete.addListener('place_changed', place => {
      this.place_changed.emit(this.autocomplete.getPlace())
    });

    this.initialized$.emit(this.autocomplete);
  };

  addGoogleMapsApi(): void {
    window['initializePlacesAutoComplete'] = this.initialize;
    if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
      let script = document.createElement( 'script' );
      script.id = 'ng2-map-api';

      // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
      let apiUrl = Ng2MapComponent['apiUrl'] || 'https://maps.google.com/maps/api/js';
      apiUrl += apiUrl.indexOf('?') ? '&' : '?';
      script.src = apiUrl + 'callback=initializePlacesAutoComplete';
      document.querySelector('body').appendChild(script);
    }
  }
}
