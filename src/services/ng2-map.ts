import { Injectable, SimpleChanges } from '@angular/core';
import { OptionBuilder } from './option-builder';
import { GeoCoder } from './geo-coder';

/**
 * collection of map instance-related properties and methods
 */
@Injectable()
export class Ng2Map {

  constructor(
    private geoCoder: GeoCoder,
    private optionBuilder: OptionBuilder
  ) {}

  setObjectEvents(definedEvents: string[], thisObj: any, prefix: string) {
    definedEvents.forEach(definedEvent => {
      let eventName = definedEvent
        .replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`) //positionChanged -> position_changed
        .replace(/^map_/, '');                               //map_click -> click  to avoid DOM conflicts

      thisObj[prefix].addListener(eventName, function(event: google.maps.event) {
        let param: any = event ? event : {};
        param.target = this;
        thisObj[definedEvent].emit(param);
      });
    });
  }

  updateGoogleObject(object: any, changes: SimpleChanges) {
    let val: any, currentValue: any, setMethodName: string;
    if (object) {
      for (let key in changes) {
        setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
        currentValue = changes[key].currentValue;
        if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
          this.geoCoder.geocode({address: currentValue}).subscribe(results => {
            object[setMethodName](results[0].geometry.location);
          });
        } else {
          val =  this.optionBuilder.googlize(currentValue);
          object[setMethodName](val);
        }
      }
    }
  }

  updateProperty(object: any, key: string, currentValue: any): void {
    let val: any, setMethodName: string;
    setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
      this.geoCoder.geocode({address: currentValue}).subscribe(results => {
        object[setMethodName](results[0].geometry.location);
      });
    } else {
      val =  this.optionBuilder.googlize(currentValue);
      object[setMethodName](val);
    }
  }
}
