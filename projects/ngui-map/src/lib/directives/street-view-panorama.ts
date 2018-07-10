import {Directive, OnDestroy} from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';

const INPUTS = [
  'selector', 'options',
  'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
  'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
  'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
  'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
const OUTPUTS = [
  'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
  'visible_changed', 'zoom_changed'
];

@Directive({
  selector: 'ngui-map > street-view-panorama',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class StreetViewPanorama extends BaseMapDirective implements OnDestroy {
  constructor(nguiMapComp: NguiMapComponent) {
    super(nguiMapComp, 'StreetViewPanorama', INPUTS, OUTPUTS);
  }

  // only called when map is ready
  initialize(): void {
    this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
    console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);

    let element: HTMLElement;
    if (this.objectOptions.selector) {
      // noinspection TypeScriptValidateTypes
      element = document.querySelector(this['selector']);
      delete this.objectOptions.selector;
    } else {
      element = this.nguiMapComponent.el;
    }

    // will be set after geocoded
    typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);

    this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
    this.mapObject['mapObjectName'] = this.mapObjectName;
    this.mapObject['nguiMapComponent'] = this.nguiMapComponent;

    // set google events listeners and emits to this outputs listeners
    this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');

    this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.mapObject);
  }

  // When destroyed, remove event listener, and delete this object to prevent memory leak
  ngOnDestroy() {
    if (this.nguiMapComponent.el) {
      this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
    }
  }
}