/// <reference types="googlemaps" />
import { ElementRef, NgZone, OnChanges, OnDestroy, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { IJson } from '../services/util';
export declare class Ng2MapComponent implements OnChanges, OnDestroy, AfterViewInit {
    optionBuilder: OptionBuilder;
    elementRef: ElementRef;
    zone: NgZone;
    geolocation: NavigatorGeolocation;
    geoCoder: GeoCoder;
    ng2Map: Ng2Map;
    el: HTMLElement;
    map: google.maps.Map;
    mapOptions: google.maps.MapOptions;
    inputChanges$: Subject<{}>;
    mapReady$: EventEmitter<any>;
    infoWindows: any;
    mapInitPath: number;
    mapIdledOnce: boolean;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, zone: NgZone, geolocation: NavigatorGeolocation, geoCoder: GeoCoder, ng2Map: Ng2Map);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    addGoogleMapsApi(): void;
    initializeMap(): void;
    setCenter(): void;
    openInfoWindow(id: string, anchor: google.maps.MVCObject, data: IJson): void;
    ngOnDestroy(): void;
}
