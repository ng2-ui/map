/// <reference types="googlemaps" />
import { ElementRef, EventEmitter, SimpleChanges, ViewContainerRef, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NguiMap } from '../services/ngui-map';
import { NguiMapComponent } from './ngui-map.component';
export declare class InfoWindow implements OnInit, OnChanges, OnDestroy {
    private elementRef;
    private nguiMap;
    private nguiMapComponent;
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
    infoWindow: google.maps.InfoWindow;
    objectOptions: google.maps.InfoWindowOptions;
    inputChanges$: Subject<{}>;
    template: ViewContainerRef;
    constructor(elementRef: ElementRef, nguiMap: NguiMap, nguiMapComponent: NguiMapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initialize(): void;
    open(anchor: google.maps.MVCObject): void;
    ngOnDestroy(): void;
}
