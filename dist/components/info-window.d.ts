/// <reference types="googlemaps" />
import { ElementRef, EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NguiMap } from '../services/ngui-map';
import { NguiMapComponent } from './ngui-map.component';
export declare class InfoWindow implements OnInit, OnChanges, OnDestroy {
    private nguiMapComponent;
    private elementRef;
    private nguiMap;
    content: any;
    disableAutoPan: any;
    maxWidth: any;
    pixelOffset: any;
    position: any;
    zIndex: any;
    options: any;
    closeclick: any;
    content_changed: any;
    domready: any;
    position_changed: any;
    zindex_changed: any;
    initialized$: EventEmitter<any>;
    el: HTMLElement;
    infoWindow: google.maps.InfoWindow;
    objectOptions: google.maps.InfoWindowOptions;
    inputChanges$: Subject<{}>;
    template: string;
    constructor(nguiMapComponent: NguiMapComponent, elementRef: ElementRef, nguiMap: NguiMap);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initialize(): void;
    open(anchor: google.maps.MVCObject, data: any): void;
    ngOnDestroy(): void;
}
