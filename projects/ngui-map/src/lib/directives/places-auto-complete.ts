import {Directive, ElementRef, EventEmitter, Input, NgZone, Output,} from '@angular/core';

import {NgMapApiLoader} from '../services/api-loader';
import {OptionBuilder} from '../services/option-builder';
import {missingLibraryError} from '../services/util';
import {first} from 'rxjs/operators';

@Directive({
  selector: '[places-auto-complete]'
})
export class PlacesAutoComplete {
  @Input() bounds: any;
  @Input() componentRestrictions: any;
  @Input() types: string[];

  @Output('place_changed') place_changed: EventEmitter<any> = new EventEmitter();
  @Output() initialized$: EventEmitter<any> = new EventEmitter();

  public objectOptions: any;
  public autocomplete: google.maps.places.Autocomplete;

  constructor(
    public optionBuilder: OptionBuilder,
    public elementRef: ElementRef,
    public apiLoader: NgMapApiLoader,
    protected zone: NgZone,
  ) {
    apiLoader.load();
    apiLoader.api$
      .pipe(first())
      .subscribe(() => this.initialize());
  }

  // only called when map is ready
  initialize = (): void => {
    this.objectOptions =
      this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], this);

    if (!google.maps.places) {
      throw missingLibraryError('PlacesAutoComplete', 'places');
    }

    this.zone.runOutsideAngular(() => {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.elementRef.nativeElement,
        this.objectOptions
      );

      this.autocomplete.addListener('place_changed', () => {
        this.zone.run(() => this.place_changed.emit(this.autocomplete.getPlace()));
      });
    });

    this.initialized$.emit(this.autocomplete);
  };
}
