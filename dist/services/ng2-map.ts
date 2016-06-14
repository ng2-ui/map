import {Injectable, SimpleChange} from '@angular/core';
import {Subject} from "rxjs/Rx";
import {OptionBuilder} from "./option-builder";
import {GeoCoder} from "./geo-coder";
import {Ng2MapComponent} from "../components/ng2-map.component";


/**
 * collection of map instance-related properties and methods
 */
@Injectable()
export class Ng2Map {
  public map: google.maps.Map; 
  public mapComponent: Ng2MapComponent;
  public mapReady$: Subject<any> = new Subject();
  
  constructor(
    private geoCoder: GeoCoder,
    private optionBuilder: OptionBuilder
  ) {}
  
  setObjectEvents(definedEvents: string[], thisObj: any, prefix: string) {
    definedEvents.forEach(definedEvent => {
      let eventName = definedEvent
        .toLowerCase()
        .replace(new RegExp("^"+prefix), '');

      thisObj[prefix].addListener(eventName, function(event: google.maps.event) {
        thisObj[definedEvent].emit(this);
      });
    });
  }

  updateGoogleObject(object: any, changes: SimpleChange) {
    let val: any, currentValue: any, setMethodName: string;
    if (object) {
      for (var key in changes) {
        setMethodName = `set${key.replace(/^[a-z]/, x => x.toUpperCase()) }`;
        currentValue = changes[key].currentValue;
        if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
          this.geoCoder.geocode({address: currentValue}).subscribe(results => {
            object[setMethodName](results[0].geometry.location);
          })
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
      })
    } else {
      val =  this.optionBuilder.googlize(currentValue);
      object[setMethodName](val);
    }
  }
}

