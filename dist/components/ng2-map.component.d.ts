/// <reference types="googlemaps" />
import { ElementRef, NgZone, OnChanges, OnDestroy, SimpleChanges, AfterViewInit } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { NavigatorGeolocation } from '../services/navigator-geolocation';
import { GeoCoder } from '../services/geo-coder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { IJson } from '../services/util';

interface ApiInterface {
    apiUrl: string;
}

export declare class Ng2MapComponent implements OnChanges, OnDestroy, AfterViewInit {
    private optionBuilder;
    private elementRef;
    private zone;
    private geolocation;
    private geoCoder;
    private ng2Map;
    static apiUrl: string;
    el: HTMLElement;
    map: google.maps.Map;
    mapOptions: google.maps.MapOptions;
    inputChanges$: Subject<{}>;
    infoWindows: any;
    mapInitPath: number;
    center: string;
    disableDefaultUI: boolean;
    draggable: boolean;
    mapTypeId: string;
    tilt: number;
    zoom: number;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, zone: NgZone, geolocation: NavigatorGeolocation, geoCoder: GeoCoder, ng2Map: Ng2Map);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    addGoogleMapsApi(): void;
    initializeMap(): void;
    setCenter(): void;
    openInfoWindow(id: string, anchor: google.maps.MVCObject, data: IJson): void;
    ngOnDestroy(): void;
}