import { ElementRef, OnInit, OnChanges, OnDestroy, EventEmitter, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from './ng2-map.component';
export declare class CustomMarker implements OnInit, OnChanges, OnDestroy {
    private ng2MapComponent;
    private elementRef;
    private ng2Map;
    position: any;
    inputChanges$: Subject<{}>;
    initialized$: EventEmitter<any>;
    private el;
    private mapObject;
    constructor(ng2MapComponent: Ng2MapComponent, elementRef: ElementRef, ng2Map: Ng2Map);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private initialize();
}
