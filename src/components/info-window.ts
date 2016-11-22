import {
  Component,
  ElementRef,
  OnInit,
  OnChanges,
  OnDestroy,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { OptionBuilder } from '../services/option-builder';
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from './ng2-map.component';


const INPUTS = [
  'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
const OUTPUTS = [
  'infoWindowCloseclick', 'infoWindowContentChanged', 'infoWindowDomready',
  'infoWindowPositionChanged', 'infoWindowZindexChanged'
];

@Component({
  selector: 'ng2-map>info-window',
  inputs: INPUTS,
  outputs: OUTPUTS,
  template: `<ng-content></ng-content>`,
})
export class InfoWindow implements OnInit, OnChanges, OnDestroy {
  public el: HTMLElement;
  public infoWindow: google.maps.InfoWindow;
  public objectOptions: google.maps.InfoWindowOptions = {};
  public inputChanges$ = new Subject();

  public template: string;
  public initialized$: EventEmitter<any> = new EventEmitter();

  constructor(
    private ng2MapComponent: Ng2MapComponent,
    private elementRef: ElementRef,
    private ng2Map: Ng2Map
  ) {
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  // Initialize this map object when map is ready
  ngOnInit() {
    if (this.ng2MapComponent.mapIdledOnce) { // map is ready already
      this.initialize();
    } else {
      this.ng2MapComponent.mapReady$.subscribe(map => this.initialize());
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inputChanges$.next(changes);
  }

  // called when map is ready
  initialize(): void {
    console.log('infowindow is being initialized');
    this.template = this.elementRef.nativeElement.innerHTML;

    this.objectOptions = this.ng2MapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
    this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
    this.infoWindow['mapObjectName'] = this.constructor['name'];
    console.log('INFOWINDOW objectOptions', this.objectOptions);

    // register infoWindow ids to Ng2Map, so that it can be opened by id
    this.el = this.elementRef.nativeElement;
    if (this.el.id) {
      this.ng2MapComponent.infoWindows[this.el.id] = this;
    } else {
      console.error('An InfoWindow must have an id. e.g. id="detail"');
    }

    // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');

    // update object when input changes
    this.inputChanges$
      .debounceTime(1000)
      .subscribe((changes: SimpleChanges) => this.ng2Map.updateGoogleObject(this.infoWindow, changes));

    this.initialized$.emit(this.infoWindow);
  }

  open(anchor: google.maps.MVCObject, data: any) {
    let html = this.template;

    for (let key in data) {
      this[key] = data[key];
      html = html.replace(`[[${key}]]`, data[key]);
    }

    // set content and open it
    this.infoWindow.setContent(html);
    this.infoWindow.open(this.ng2MapComponent.map, anchor);
  }

  ngOnDestroy() {
    if (this.infoWindow) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.infoWindow, output));
      delete this.infoWindow;
    }
  }
}
