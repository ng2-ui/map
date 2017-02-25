/// <reference types="googlemaps" />
import { EventEmitter, ElementRef, NgZone } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
export declare class PlacesAutoComplete {
    optionBuilder: OptionBuilder;
    elementRef: ElementRef;
    zone: NgZone;
    private config;
    bounds: any;
    componentRestrictions: any;
    types: string[];
    place_changed: EventEmitter<any>;
    initialized$: EventEmitter<any>;
    objectOptions: any;
    autocomplete: google.maps.places.Autocomplete;
    private mapIndex;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, zone: NgZone, config: any);
    addGoogleMapsApi(): void;
    initialize: () => void;
}
