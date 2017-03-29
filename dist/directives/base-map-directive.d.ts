import { EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { OptionBuilder } from '../services/option-builder';
import { NguiMap } from '../services/ngui-map';
import { NguiMapComponent } from '../components/ngui-map.component';
export declare abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
    protected nguiMapComponent: NguiMapComponent;
    mapObjectName: string;
    protected inputs: string[];
    protected outputs: string[];
    initialized$: EventEmitter<any>;
    mapObject: any;
    objectOptions: any;
    nguiMap: NguiMap;
    optionBuilder: OptionBuilder;
    libraryName: string;
    protected _subscriptions: any[];
    constructor(nguiMapComponent: NguiMapComponent, mapObjectName: string, inputs: string[], outputs: string[]);
    ngOnInit(): void;
    initialize(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
