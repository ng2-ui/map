import { Directive } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';

const INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
const OUTPUTS = [
  'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
  'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];

@Directive({
  selector: 'ng2-map > data-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class DataLayer extends BaseMapDirective {
  constructor(ng2MapComponent: Ng2MapComponent) {
    super(ng2MapComponent, 'Data', INPUTS, OUTPUTS);
  }

  // only called when map is ready
  initialize(): void {
    if (this['geoJson']) {
      console.log('this.geoJson', this['geoJson']);
      this.ng2MapComponent.map.data.loadGeoJson(this['geoJson']);
    } else {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
      console.log(this.mapObjectName, 'initialization objectOptions', this.objectOptions);
      this.ng2MapComponent.map.data.add(this.objectOptions);
    }

    // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
    this.mapObject = this.ng2MapComponent.map.data;

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(this.outputs, this, 'mapObject');

    this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.mapObject);
  }
}