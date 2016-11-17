import { EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';

export abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
  protected abstract mapObject: any; // e.g. google.maps.Marker
  protected abstract objectOptions: any; // e.g. google.maps.MarkerOptions

  protected mapObjectName: string ; // e.g. Marker

  constructor(
    public ng2Map: Ng2Map,
    protected optionBuilder: OptionBuilder,
    protected inputs: string[],
    protected outputs: string[],
  ) {
    this.outputs.forEach(output => this[output] = new EventEmitter());
    this.mapObjectName = this.constructor['name'];
  }

  // Initialize this map object when map is ready
  ngOnInit() {
    if (this.ng2Map.map) { // map is ready already
      this.initialize(this.ng2Map.map);
    } else {
      this.ng2Map.mapReady$.subscribe(map => this.initialize(map));
    }
  }

  // called when map is ready
  initialize(map: google.maps.Map): void {
    this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
    console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);

    // will be set after geocoded
    typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
    typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);

    // noinspection TypeScriptUnresolvedFunction
    this.mapObject = new google.maps[this.mapObjectName](Object.assign({}, this.objectOptions, {map: map}));
    this.mapObject['mapObjectName'] = this.mapObjectName;

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
  }

  // When input is changed, update object too.
  // e.g., when map center is changed by user, update center on the map
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.mapObjectName, 'objectOptions are changed', changes);
    this.ng2Map.updateGoogleObject(this.mapObject, changes);
  }

  // When destroyed, remove event listener, and delete this object to prevent memory leak
  ngOnDestroy() {
    if (this.mapObject) {
      this.outputs.forEach(output => google.maps.event.clearListeners(this.mapObject, output));
      delete this.mapObject['setMap'](null);
      delete this.mapObject;
    }
  }
}
