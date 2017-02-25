/// <reference types="googlemaps" />
import { ElementRef, OnInit, OnChanges, OnDestroy, EventEmitter, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from './ng2-map.component';
export declare class InfoWindow implements OnInit, OnChanges, OnDestroy {
    private ng2MapComponent;
    private elementRef;
    private ng2Map;
    content: any;
    disableAutoPan: any;
    maxWidth: any;
    pixelOffset: any;
    position: any;
    zIndex: any;
    options: any;
    el: HTMLElement;
    infoWindow: google.maps.InfoWindow;
    objectOptions: google.maps.InfoWindowOptions;
    inputChanges$: Subject<{}>;
    template: string;
    initialized$: EventEmitter<any>;
    constructor(ng2MapComponent: Ng2MapComponent, elementRef: ElementRef, ng2Map: Ng2Map);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initialize(): void;
    open(anchor: google.maps.MVCObject, data: any): void;
    ngOnDestroy(): void;
}
