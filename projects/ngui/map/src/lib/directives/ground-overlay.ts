import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [ 'url', 'bounds', 'clickable', 'opacity' ];
const OUTPUTS = [ 'click', 'dblclick' ];

@Directive({
  selector: 'ngui-map > ground-overlay',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class GroundOverlay extends BaseMapDirective {
  public mapObject: google.maps.GroundOverlay;
  public objectOptions: google.maps.GroundOverlayOptions = <google.maps.GroundOverlayOptions>{};

  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'GroundOverlay', INPUTS, OUTPUTS);
  }

  // re-declaring initialize function. called when map is ready
  initialize(): void {
    // url, bounds are not the options of GroundOverlay
    this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
    console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);

    // noinspection TypeScriptUnresolvedFunction
    this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
    this.mapObject.setMap(this.nguiMapComponent.map);
    this.mapObject['mapObjectName'] = this.mapObjectName;

    // set google events listeners and emits to this outputs listeners
    this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');

    this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.mapObject);
  }
}

