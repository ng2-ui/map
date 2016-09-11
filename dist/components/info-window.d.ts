/// <reference types="googlemaps" />
import { ElementRef, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { OptionBuilder } from "../services/option-builder";
import { Ng2Map } from "../services/ng2-map";
import { Subject } from "rxjs/Rx";
export declare class InfoWindow implements OnChanges, OnDestroy {
    private optionBuilder;
    private elementRef;
    private ng2Map;
    el: HTMLElement;
    infoWindow: google.maps.InfoWindow;
    options: google.maps.InfoWindowOptions;
    inputChanges$: Subject<{}>;
    template: string;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, ng2Map: Ng2Map);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    initialize(map: google.maps.Map): void;
    open(anchor: google.maps.MVCObject, data: any): void;
    ngOnDestroy(): void;
}
