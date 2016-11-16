/// <reference types="googlemaps" />
import { SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
export declare abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
    ng2Map: Ng2Map;
    private optionBuilder;
    private inputs;
    private outputs;
    protected abstract mapObject: any;
    protected abstract objectOptions: any;
    private mapObjectName;
    constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder, inputs: string[], outputs: string[]);
    ngOnInit(): void;
    initialize(map: google.maps.Map): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
