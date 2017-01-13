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
import { Ng2Map } from '../services/ng2-map';
import { Ng2MapComponent } from './ng2-map.component';

const INPUTS = [
  'position'
];
const OUTPUTS = [
  'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
  'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
  'dhapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
];

interface IInternalMarker extends google.maps.OverlayView { }

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
  private mapObject: IInternalMarker;

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

    this.mapObject = this.classLoader();
    this.mapObject.setMap(this.ng2MapComponent.map);

     // set google events listeners and emits to this outputs listeners
    this.ng2Map.setObjectEvents(OUTPUTS, this, 'mapObject');

    // update object when input changes
    this.inputChanges$
      .debounceTime(1000)
      .subscribe((changes: SimpleChanges) => this.ng2Map.updateGoogleObject(this.mapObject, changes));

    this.ng2MapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
    this.initialized$.emit(this.mapObject);
  }

  /**
   * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
   * Otherwise throws a google is unknown error.
   */
  private classLoader(): IInternalMarker {
    let obj = this;

    class InternalMarker extends google.maps.OverlayView implements IInternalMarker {

      private zIndex: string;
      private visible: boolean = true;

      constructor() {
        super();
      }

      onAdd(): void {
        this.getPanes().overlayMouseTarget.appendChild(obj.el);

        // required for correct display inside google maps container
        obj.el.style.position = 'absolute';
      }

      draw(): void {
        this.setPosition(obj['position']);
        this.setZIndex(this.zIndex);
        this.setVisible(this.visible);
      }

      onRemove(): void {
        //
      }

      setPosition(position: any): void {

        let _setPosition = (latLng: google.maps.LatLng) => {
          let posPixel = this.getProjection().fromLatLngToDivPixel(latLng);
          let x = Math.round(posPixel.x - (obj.el.offsetWidth / 2));
          let y = Math.round(posPixel.y - (obj.el.offsetHeight / 2));
          obj.el.style.left = x + 'px';
          obj.el.style.top = y + 'px';
          obj.el.style.visibility = 'visible';
        };

        if (typeof position === 'string') {
          // geocode it
          obj.ng2MapComponent.geoCoder.geocode({ address: position }).subscribe((results: google.maps.GeocoderResult) => {
            console.log('setting marker position from address', position);
            _setPosition(results[0].geometry.location);
          });
        } else {
          // assume array format [lat, lng]
          let latLng = new google.maps.LatLng(position[0], position[1]);
          _setPosition(latLng);
        }
      }

      setZIndex(zIndex: string): void {
        zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
        obj.el.style.zIndex = this.zIndex;
      }

      setVisible(visible: boolean) {
        obj.el.style.display = visible ? 'inline-block' : 'none';
        this.visible = visible;
      };
    };
    return new InternalMarker();
  }
}



