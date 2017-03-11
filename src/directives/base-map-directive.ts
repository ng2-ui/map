import {EventEmitter, SimpleChanges, Output, OnInit, OnChanges, OnDestroy} from '@angular/core';

import { OptionBuilder, Ng2Map, Ng2MapComponent } from 'ng2-map';

export abstract class BaseMapDirective implements OnInit, OnChanges, OnDestroy {
  // this should be redefined on each childr directive
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  public mapObject: any; // e.g. google.maps.Marker
  public objectOptions: any; // e.g. google.maps.MarkerOptions

  public ng2Map: Ng2Map;
  public optionBuilder: OptionBuilder;
  public libraryName: string;
  protected _subscriptions = [];

  constructor(
    protected ng2MapComponent: Ng2MapComponent,
    public    mapObjectName: string,
    protected inputs: string[],
    protected outputs: string[]
  ) {
    this.ng2Map = this.ng2MapComponent['ng2Map'];
    this.optionBuilder = this.ng2MapComponent['optionBuilder'];
    // all outputs must be initialized
    this.outputs.forEach(output => this[output] = new EventEmitter());
    this.mapObjectName = mapObjectName;
  }

  // Initialize this map object when map is ready
  ngOnInit() {
    if (this.ng2MapComponent.mapIdledOnce) { // map is ready already
      this.initialize();
    } else {
      this.ng2MapComponent.mapReady$.subscribe(map => this.initialize());
    }
  }

  // only called when map is ready
  initialize(): void {
    this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
    console.log(this.mapObjectName, 'initialization options', this.objectOptions);

    // will be set after geocoded
    typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
    typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);

    // noinspection TypeScriptUnresolvedFunction
    if (this.libraryName) {
      this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
    } else {
      this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
    }
    this.mapObject.setMap(this.ng2MapComponent.map);
    this.mapObject['mapObjectName'] = this.mapObjectName;
    this.mapObject['ng2MapComponent'] = this.ng2MapComponent;

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');

    this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.mapObject);
  }

  // When input is changed, update object too.
  // e.g., when map center is changed by user, update center on the map
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.mapObjectName, 'objectOptions are changed', changes);
    this.ng2Map.updateGoogleObject(this.mapObject, changes);
  }

  // When destroyed, remove event listener, and delete this object to prevent memory leak
  ngOnDestroy() {
    this._subscriptions.map(subscription => subscription.unsubscribe());
    this.ng2MapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);

    if (this.mapObject) {
      this.outputs.forEach(output => google.maps.event.clearListeners(this.mapObject, output));
      this.mapObject['setMap'](null);
      delete this.mapObject;
    }
  }
}
