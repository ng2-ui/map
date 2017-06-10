import {
  Component,
  ElementRef,
  Output,
  EventEmitter,
  SimpleChanges, OnInit, OnDestroy, OnChanges,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';

import { NguiMap } from '../services/ngui-map';
import { NguiMapComponent } from './ngui-map.component';


const INPUTS = [
  'position'
];
// to avoid DOM event conflicts map_*
const OUTPUTS = [
  'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
  'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
  'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
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

      if (position.constructor.name === 'Array') {
        this.position = new google.maps.LatLng(position[0], position[1]);
      } else if (typeof position === 'string') {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({address: position}, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            console.log('setting custom marker position from address', position);
            this.setPosition(results[0].geometry.location);
          } else {
            console.log('Error in custom marker geo coding, position');
          }
        });
      } else if (position && typeof position.lng === 'function') {
        this.position = position;
      }

      if (this.getProjection() && typeof this.position.lng === 'function') {
        let positionOnMap = () => {
          let posPixel = this.getProjection().fromLatLngToDivPixel(this.position);
          let x = Math.round(posPixel.x - (this.htmlEl.offsetWidth / 2));
          let y = Math.round(posPixel.y - this.htmlEl.offsetHeight / 2);
          this.htmlEl.style.left = x + 'px';
          this.htmlEl.style.top = y + 'px';
          this.htmlEl.style.visibility = 'visible';
        };

        if (this.htmlEl.offsetWidth && this.htmlEl.offsetHeight) {
          positionOnMap();
        } else {
          setTimeout(() => positionOnMap());
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
  selector: 'ngui-map > custom-marker',
  inputs: INPUTS,
  outputs: OUTPUTS,
  template: `
    <ng-content></ng-content>
  `,
})

export class CustomMarker implements OnInit, OnDestroy, OnChanges {
  @Output() initialized$: EventEmitter<any> = new EventEmitter();

  public inputChanges$ = new Subject();

  private el: HTMLElement;
  private mapObject: any;

  constructor(private nguiMapComponent: NguiMapComponent,
              private elementRef: ElementRef,
              private nguiMap: NguiMap) {
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS.forEach(output => this[output] = new EventEmitter());
  }

  // Initialize this map object when map is ready
  ngOnInit() {
    if (this.nguiMapComponent.mapIdledOnce) { // map is ready already
      this.initialize();
    } else {
      this.nguiMapComponent.mapReady$.subscribe(map => this.initialize());
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inputChanges$.next(changes);
  }

  ngOnDestroy() {
    this.inputChanges$.complete();
    this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);

    if (this.mapObject) {
      this.nguiMap.clearObjectEvents(OUTPUTS, this, 'mapObject');
    }
  }

  private initialize(): void {
    console.log('custom-marker is being initialized');
    this.el = this.elementRef.nativeElement;

    this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
    this.mapObject.setMap(this.nguiMapComponent.map);

    // set google events listeners and emits to this outputs listeners
    this.nguiMap.setObjectEvents(OUTPUTS, this, 'mapObject');

    // update object when input changes
    debounceTime.call(this.inputChanges$, 1000)
      .subscribe((changes: SimpleChanges) => this.nguiMap.updateGoogleObject(this.mapObject, changes));

    this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
    this.initialized$.emit(this.mapObject);
  }

}
