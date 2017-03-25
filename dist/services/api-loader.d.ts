import { NgZone, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare abstract class NgMapApiLoader implements OnDestroy {
    protected config: any;
    api$: ReplaySubject<any>;
    abstract load(): any;
    constructor(config: any);
    ngOnDestroy(): void;
}
export declare class NgMapAsyncCallbackApiLoader extends NgMapApiLoader {
    protected zone: NgZone;
    constructor(zone: NgZone, config: any);
    load(): void;
    private addGoogleMapsApi();
}
export declare class NgMapAsyncApiLoader extends NgMapApiLoader {
    constructor(config: any);
    load(): void;
}
