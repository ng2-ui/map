/// <reference types="googlemaps" />
import { ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
export declare class InfoWindow implements OnInit, OnChanges, OnDestroy {
    private optionBuilder;
    private elementRef;
    private ng2Map;
    el: HTMLElement;
    infoWindow: google.maps.InfoWindow;
    objectOptions: google.maps.InfoWindowOptions;
    inputChanges$: Subject<{}>;
    template: string;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, ng2Map: Ng2Map);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initialize(map: google.maps.Map): void;
    open(anchor: google.maps.MVCObject, data: any): void;
    ngOnDestroy(): void;
}
