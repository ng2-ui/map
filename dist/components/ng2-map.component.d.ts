import { ElementRef, NgZone, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { OptionBuilder } from "../services/option-builder";
import { NavigatorGeolocation } from "../services/navigator-geolocation";
import { GeoCoder } from "../services/geo-coder";
import { Ng2Map } from "../services/ng2-map";
import { Subject } from "rxjs/Rx";
import { IJson } from "../services/util";
export declare class Ng2MapComponent implements OnChanges, OnDestroy {
    private optionBuilder;
    private elementRef;
    private zone;
    private geolocation;
    private geoCoder;
    private ng2Map;
    el: HTMLElement;
    map: google.maps.Map;
    mapOptions: google.maps.MapOptions;
    inputChanges$: Subject<{}>;
    infoWindows: any;
    mapInitPath: number;
    constructor(optionBuilder: OptionBuilder, elementRef: ElementRef, zone: NgZone, geolocation: NavigatorGeolocation, geoCoder: GeoCoder, ng2Map: Ng2Map);
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    addGoogleMapsApi(): void;
    initializeMap(): void;
    setCenter(): void;
    openInfoWindow(id: string, anchor: google.maps.MVCObject, data: IJson): void;
    ngOnDestroy(): void;
}
