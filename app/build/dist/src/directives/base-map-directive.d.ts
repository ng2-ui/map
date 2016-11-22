import { EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
    protected ng2MapComponent: Ng2MapComponent;
    protected inputs: string[];
    protected outputs: string[];
    mapObject: any;
    objectOptions: any;
    mapObjectName: string;
    ng2Map: Ng2Map;
    optionBuilder: OptionBuilder;
    initialized$: EventEmitter<any>;
    libraryName: string;
    constructor(ng2MapComponent: Ng2MapComponent, inputs: string[], outputs: string[]);
    ngOnInit(): void;
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
