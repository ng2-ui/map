import { Directive } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { BaseMapDirective } from './base-map-directive';

const INPUTS = [ 'url', 'bounds', 'clickable', 'opacity' ];
const OUTPUTS = [ 'click', 'dblclick' ];

@Directive({
  selector: 'ng2-map > ground-overlay',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class GroundOverlay extends BaseMapDirective {
  protected mapObject: google.maps.GroundOverlay;
  protected objectOptions: google.maps.GroundOverlayOptions = <google.maps.GroundOverlayOptions>{};

  constructor(ng2Map: Ng2Map, optionBuilder: OptionBuilder) {
    super(ng2Map, optionBuilder, INPUTS, OUTPUTS);
  }

  // re-declaring initialize function. called when map is ready
  initialize(map: google.maps.Map): void {
    // url, bounds are not the options of GroundOverlay
    this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
    console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);

    // noinspection TypeScriptUnresolvedFunction
    this.mapObject = new google.maps.GroundOverlay(
      this['url'],
      this['bounds'],
      Object.assign({}, this.objectOptions, {map: map})
    );
    this.mapObject['mapObjectName'] = this.mapObjectName;

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');
  }
}

