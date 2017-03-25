import { EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
    protected ng2MapComponent: Ng2MapComponent;
    mapObjectName: string;
    protected inputs: string[];
    protected outputs: string[];
    initialized$: EventEmitter<any>;
    mapObject: any;
    objectOptions: any;
    ng2Map: Ng2Map;
    optionBuilder: OptionBuilder;
    libraryName: string;
    protected _subscriptions: any[];
    constructor(ng2MapComponent: Ng2MapComponent, mapObjectName: string, inputs: string[], outputs: string[]);
    ngOnInit(): void;
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
