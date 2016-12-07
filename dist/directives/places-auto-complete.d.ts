/// <reference types="googlemaps" />
import { EventEmitter, ElementRef } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
export declare class PlacesAutoComplete {
    optionBuilder: OptionBuilder;
    elementRef: ElementRef;
    bounds: any;
    componentRestrictions: any;
    types: string[];
    place_changed: EventEmitter<any>;
    initialized$: EventEmitter<any>;
    objectOptions: any;
    autocomplete: google.maps.places.Autocomplete;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef);
    initialize: () => void;
    addGoogleMapsApi(): void;
}
