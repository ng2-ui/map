import { Injectable, SimpleChanges, NgZone } from '@angular/core';
import { OptionBuilder } from './option-builder';
import { GeoCoder } from './geo-coder';

/**
 * collection of map instance-related properties and methods
 */
@Injectable()
export class NguiMap {

  constructor(
    private geoCoder: GeoCoder,
    private optionBuilder: OptionBuilder,
    private zone: NgZone,
  ) {}

  setObjectEvents(definedEvents: string[], thisObj: any, prefix: string) {
    definedEvents.forEach(definedEvent => {
      let eventName = definedEvent
        .replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`) // positionChanged -> position_changed
        .replace(/^map_/, '');                               // map_click -> click  to avoid DOM conflicts

      let zone = this.zone;
      zone.runOutsideAngular(() => {
        thisObj[prefix].addListener(eventName, function(event: google.maps.event) {
          let param: any = event ? event : {};
          param.target = this;
          zone.run(() => thisObj[definedEvent].emit(param));
        });
      });
    });
  }

  clearObjectEvents(definedEvents: string[], thisObj: any, prefix: string) {
    definedEvents.forEach(definedEvent => {
      let eventName = definedEvent
        .replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`) // positionChanged -> position_changed
        .replace(/^map_/, '');                               // map_click -> click  to avoid DOM conflicts

      this.zone.runOutsideAngular(() => {
        google.maps.event.clearListeners(thisObj[prefix], eventName);
      });
    });

    if (thisObj[prefix]) {
      if (thisObj[prefix].setMap) {
        thisObj[prefix].setMap(null);
      }

      delete thisObj[prefix].nguiMapComponent;
      delete thisObj[prefix];
    }

  }

  updateGoogleObject = (object: any, changes: SimpleChanges)  => {
    let val: any, currentValue: any, setMethodName: string;
    if (object) {
      for (let key in changes) {
        setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
        currentValue = changes[key].currentValue;
        if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
          // To preserve setMethod name in Observable callback, wrap it as a function, then execute
          ((setMethodName) => {
            this.geoCoder.geocode({address: currentValue}).subscribe(results => {
              if (typeof object[setMethodName] === 'function') {
                object[setMethodName](results[0].geometry.location);
              } else {
                console.error(
                  'Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                  'Please check Google Maps API documentation, and use "setOptions" instead.'
                );
              }
            });
          })(setMethodName);
        } else {
          val =  this.optionBuilder.googlize(currentValue);
          if (typeof object[setMethodName] === 'function') {
            object[setMethodName](val);
          } else {
            console.error(
              'Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
              'Please check Google Maps API documentation, and use "setOptions" instead.'
            );
          }
        }
      }
    }
  }
}
