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
import { debounceTime } from 'rxjs/operator/debounceTime';

import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from './ng2-map.component';

const INPUTS = [
  'position'
];
const OUTPUTS = [
  'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
  'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
  'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
  //to avoid DOM event conflicts
  'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];

/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl: HTMLElement, position: any) {

  class CustomMarkerOverlayView extends google.maps.OverlayView {

    private htmlEl: HTMLElement;
    private position: any;
    private zIndex: string;
    private visible: boolean = true;

    constructor(htmlEl: HTMLElement, position: any) {
      super();
      this.htmlEl = htmlEl;
      this.position = position;
    }

    onAdd(): void {
      this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);

      // required for correct display inside google maps container
      this.htmlEl.style.position = 'absolute';
    }

    draw(): void {
      this.setPosition(this.position);
      this.setZIndex(this.zIndex);
      this.setVisible(this.visible);
    }

    onRemove(): void {
      //
    }

    getPosition() {
      return this.position;
    };

    setPosition = (position?: any) => {
      this.htmlEl.style.visibility = 'hidden';

      if (position.constructor.name === "Array") {
        this.position = new google.maps.LatLng(position[0], position[1]);
      } else if (typeof position === 'string') {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: position }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            console.log('setting custom marker position from address', position);
            this.setPosition(results[0].geometry.location);
          } else {
            console.log('Error in custom marker geo coding, position');
          }
        });
      } else if (position && typeof position.lng == 'function') {
        this.position = position;
      }
      
      if (this.getProjection() && typeof this.position.lng == 'function') {
        let positionOnMap = () => {
          var posPixel = this.getProjection().fromLatLngToDivPixel(this.position);
          var x = Math.round(posPixel.x - (this.htmlEl.offsetWidth/2));
          var y = Math.round(posPixel.y - this.htmlEl.offsetHeight/2);
          this.htmlEl.style.left = x + 'px';
          this.htmlEl.style.top = y + 'px';
          this.htmlEl.style.visibility = 'visible';
        }
      
        if (this.htmlEl.offsetWidth && this.htmlEl.offsetHeight) {
          positionOnMap();
        } else {
          setTimeout( () => positionOnMap() );
        }
      }
    }

    setZIndex(zIndex: string): void {
      zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
      this.htmlEl.style.zIndex = this.zIndex;
    }

    setVisible(visible: boolean) {
      this.htmlEl.style.display = visible ? 'inline-block' : 'none';
      this.visible = visible;
    };
  }

  return new CustomMarkerOverlayView(htmlEl, position);
}

@Component({
  selector: 'ng2-map > custom-marker',
  inputs: INPUTS,
  outputs: OUTPUTS,
  template: `
    <ng-content></ng-content>
  `,
})

export class CustomMarker implements OnInit, OnChanges, OnDestroy {

  public inputChanges$ = new Subject();
  public initialized$: EventEmitter<any> = new EventEmitter();

  private el: HTMLElement;
  private mapObject: any;

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

  ngOnDestroy() {
    this.ng2MapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);

    if (this.mapObject) {
      OUTPUTS.forEach(output => google.maps.event.clearListeners(this.mapObject, output));
      this.mapObject.setMap(null);
      delete this.mapObject;
    }
  }

  private initialize(): void {
    console.log('custom-marker is being initialized');
    this.el = this.elementRef.nativeElement;

    this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
    this.mapObject.setMap(this.ng2MapComponent.map);

     // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'mapObject');

    // update object when input changes
    debounceTime.call(this.inputChanges$, 1000)
      .subscribe((changes: SimpleChanges) => this.ng2Map.updateGoogleObject(this.mapObject, changes));

    this.ng2MapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
    this.initialized$.emit(this.mapObject);
  }

}
