import { SimpleChanges, NgZone } from '@angular/core';
import { OptionBuilder } from './option-builder';
import { GeoCoder } from './geo-coder';
/**
 * collection of map instance-related properties and methods
 */
export declare class NguiMap {
    private geoCoder;
    private optionBuilder;
    private zone;
    constructor(geoCoder: GeoCoder, optionBuilder: OptionBuilder, zone: NgZone);
    setObjectEvents(definedEvents: string[], thisObj: any, prefix: string): void;
    clearObjectEvents(definedEvents: string[], thisObj: any, prefix: string): void;
    updateGoogleObject: (object: any, changes: SimpleChanges) => void;
}
