import { Directive, Output, EventEmitter } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = [ 'url', 'bounds', 'clickable', 'opacity' ];
const OUTPUTS = [ 'click', 'dblclick' ];

@Directive({
  selector: 'ng2-map > ground-overlay',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class GroundOverlay extends BaseMapDirective {
  @Output() public initialized$: EventEmitter<any> = new EventEmitter();

  public mapObject: google.maps.GroundOverlay;
  public objectOptions: google.maps.GroundOverlayOptions = <google.maps.GroundOverlayOptions>{};

  constructor(ng2MapComp: Ng2MapComponent) {
    super(ng2MapComp, 'GroundOverlay', INPUTS, OUTPUTS);
  }

  // re-declaring initialize function. called when map is ready
  initialize(): void {
    // url, bounds are not the options of GroundOverlay
    this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
    if (this.ng2MapComponent.loggingEnabled) {
      console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
    }

    // noinspection TypeScriptUnresolvedFunction
    this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
    this.mapObject.setMap(this.ng2MapComponent.map);
    this.mapObject['mapObjectName'] = this.mapObjectName;

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');

    this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.mapObject);
  }
}

