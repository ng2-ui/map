import {
  Input,
  Output,
  Directive,
  EventEmitter,
  ElementRef,
  Optional,
  NgZone,
  Inject
} from '@angular/core';

import { NG_MAP_CONFIG_TOKEN } from '../services/config';
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
  private mapIndex: number;

  constructor(
    public optionBuilder: OptionBuilder,
    public elementRef: ElementRef,
    public zone: NgZone,
    @Optional() @Inject(NG_MAP_CONFIG_TOKEN) private config
  ) {
    this.config = this.config 
      || {apiUrl: 'https://maps.google.com/maps/api/js?libraries=places'};

    //treat this as ng2Map because it requires google api on root level
    window['ng2MapRef'] = window['ng2MapRef'] || [];
    this.mapIndex = window['ng2MapRef'].length;
    window['ng2MapRef'].push({ 
      zone: this.zone, 
      componentFn: () => this.initialize()
    });

    if (typeof google === 'undefined' || typeof google.maps === 'undefined' || !google.maps.Map) {
      this.addGoogleMapsApi();
    } else {
      this.initialize();
    }
  }

  addGoogleMapsApi(): void {

    window['initNg2Map'] = window['initNg2Map'] || function() {
      window['ng2MapRef'].forEach( ng2MapRef => {
        ng2MapRef.zone.run(function() { ng2MapRef.componentFn(); });
      });
      window['ng2MapRef'] = [];
    }

    if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ng2-map-api')) {
      let script = document.createElement( 'script' );
      script.id = 'ng2-map-api';

      // script.src = "https://maps.google.com/maps/api/js?callback=initNg2Map";
      let apiUrl = this.config.apiUrl;
      apiUrl += apiUrl.indexOf('?') ? '&' : '?';
      script.src = apiUrl + 'callback=initNg2Map';
      document.querySelector('body').appendChild(script);
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

}
