import { Directive, EventEmitter, SimpleChange, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { Subject } from 'rxjs/Subject';

const INPUTS = [
  'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
  'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex',
];
const OUTPUTS = [
  'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];

@Directive({
  selector: 'ng2-map>polygon',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class Polygon implements OnInit, OnChanges, OnDestroy {
  private polygon: google.maps.Polygon;
  private options: google.maps.PolygonOptions = <google.maps.PolygonOptions>{};

  private inputChanges$ = new Subject();

  constructor(
    public ng2Map: Ng2Map,
    private optionBuilder: OptionBuilder
  ) {
    // all outputs needs to be initialized, http://stackoverflow.com/questions/37765519
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  ngOnInit() {
    if (this.ng2Map.map) { // map is ready already
      this.initialize(this.ng2Map.map);
    } else {
      this.ng2Map.mapReady$.subscribe(map => this.initialize(map));
    }
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.inputChanges$.next(changes);
  }

  // called when map is ready
  initialize(map: google.maps.Map): void {
    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    console.log('Polygon initialization options', this.options.paths);

    // noinspection TypeScriptUnresolvedFunction
    this.polygon = new google.maps.Polygon(Object.assign({}, this.options, {map: map}));
    this.polygon['mapObjectName'] = this.constructor['name'];

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'polygon');

    // update pologon when input changes
    this.inputChanges$.subscribe((changes: SimpleChange) => {
      console.log('polygon options are changed', changes);
      this.ng2Map.updateGoogleObject(this.polygon, changes);
    });
  }

  ngOnDestroy() {
    if (this.polygon) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.polygon, output));
      delete this.polygon.setMap(null);
      delete this.polygon;
    }
  }
}
