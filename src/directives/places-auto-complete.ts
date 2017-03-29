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
    this.config = this.config || {apiUrl: 'https://maps.google.com/maps/api/js?libraries=places'};

    // treat this as nguiMap because it requires google api on root level
    window['nguiMapRef'] = window['nguiMapRef'] || [];
    this.mapIndex = window['nguiMapRef'].length;
    window['nguiMapRef'].push(
      {
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

    window['initNguiMap'] = window['initNguiMap'] || function() {
      window['nguiMapRef'].forEach( nguiMapRef => {
        nguiMapRef.zone.run(function() { nguiMapRef.componentFn(); });
      });
      window['nguiMapRef'] = [];
    };

    if ((!window['google'] || !window['google']['maps']) && !document.querySelector('#ngui-map-api')) {
      let script = document.createElement( 'script' );
      script.id = 'ngui-map-api';

      // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
      let apiUrl = this.config.apiUrl;
      apiUrl += apiUrl.indexOf('?') ? '&' : '?';
      script.src = apiUrl + 'callback=initNguiMap';
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
      this.place_changed.emit(this.autocomplete.getPlace());
    });

    this.initialized$.emit(this.autocomplete);
  }
}
