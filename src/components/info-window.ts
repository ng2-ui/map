import {
  Component,
  ElementRef,
  ViewEncapsulation,
  OnChanges,
  OnDestroy,
  EventEmitter,
  SimpleChange,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import {OptionBuilder} from "../services/option-builder";
import {Ng2Map} from "../services/ng2-map";
import {Subject} from "rxjs/Rx";

const INPUTS = `
  content, disableAutoPan, maxWidth, pixelOffset, position, zIndex
  `.split(',').map(el => el.trim());

const OUTPUTS = `
  closeclick, content_changed, domready, position_changed, zindex_changed
  `.split(',').map(el => `infoWindow${el.trim().replace(/^[a-z]/,x => x.toUpperCase())}`);

@Component({
  selector: 'info-window',
  moduleId: module.id,
  inputs: INPUTS,
  output: OUTPUTS,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`
})
export class InfoWindow implements OnChanges, OnDestroy {

  public el: HTMLElement;
  public infoWindow: google.maps.InfoWindow;
  public options: google.maps.InfoWindowOptions = {};
  public inputChanges$ = new Subject();
  
  public template: string;

  constructor(
    private optionBuilder: OptionBuilder,
    private elementRef: ElementRef,
    private ng2Map: Ng2Map
  ) {
    this.elementRef.nativeElement.style.display = 'none';

    if (this.ng2Map.map) { //map is ready already
      this.initialize(this.ng2Map.map);
    } else {
      this.ng2Map.mapReady$.subscribe(map => this.initialize(map));
    }
    
    // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.inputChanges$.next(changes);
  }

  // called when map is ready
  initialize(map): void {
    console.log('infowindow is being initialized');
    this.template = this.elementRef.nativeElement.innerHTML;
    
    this.options = this.optionBuilder.googlizeAllInputs(INPUTS, this);
    this.infoWindow = new google.maps.InfoWindow(this.options);
    console.log('INFOWINDOW options', this.options);
    
    //register infoWindow ids to Ng2Map, so that it can be opened by id
    this.el = this.elementRef.nativeElement;
    if (this.el.id) {
      this.ng2Map.mapComponent.infoWindows[this.el.id] = this;
    } else {
      console.error('An InfoWindow must have an id. e.g. id="detail"');
    }

    //set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'infoWindow');

    // update object when input changes
    this.inputChanges$
      .debounceTime(1000)
      .subscribe(changes =>this.ng2Map.updateGoogleObject(this.infoWindow, changes));
  }

  open(anchor: google.maps.MVCObject, data: any) {
    let html = this.template;
    
    for(var key in data) {
      this[key] = data[key];
      html = html.replace(`[[${key}]]`, data[key]);
    }
    
    //set content and open it
    this.infoWindow.setContent(html);
    this.infoWindow.open(this.ng2Map.map, anchor);
  }

  ngOnDestroy() {
    OUTPUTS.forEach(output => google.maps.event.clearListeners(this.infoWindow, output));
    delete this.infoWindow;
  }
}