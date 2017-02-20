import { Input, Directive, SimpleChanges } from '@angular/core';

import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
import { NavigatorGeolocation } from '../services/navigator-geolocation';

const INPUTS = [
  'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
  'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
  'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
const OUTPUTS = ['directions_changed'];

@Directive({
  selector: 'ng2-map > directions-renderer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class DirectionsRenderer extends BaseMapDirective {
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;

  @Input('directions-request') directionsRequest: google.maps.DirectionsRequest;

  constructor(
    ng2MapComponent: Ng2MapComponent,
    public geolocation: NavigatorGeolocation
  ) {
    super(ng2MapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS);
  }

  // only called when map is ready
  initialize(): void {
    this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
    if (typeof this.objectOptions['panel'] === 'string') { // find a Node for panel
      this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
    }

    console.log('DirectionsRenderer', 'initialization options', this.objectOptions, this.directionsRequest);

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);

    this.directionsRenderer.setMap(this.ng2MapComponent.map);

    // set google events listeners and emidirectionsRenderer to this outputs listeners
    this.showDirections(this.directionsRequest);

    this.ng2Map.setObjectEvents(this.outputs, this, 'directionsRenderer');

    this.ng2MapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
    this.initialized$.emit(this.directionsRenderer);
  }


  ngOnChanges(changes: SimpleChanges) {
    let newOptions = {};
    for (let key in changes) {
      if (this.inputs.indexOf(key) !== -1) {
        newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
      }
    }
    if (changes['directionsRequest'] && this.directionsRenderer) {
      this.directionsService && this.showDirections(this.directionsRequest);
    }
  }

  showDirections(directionsRequest: google.maps.DirectionsRequest) {
    this.directionsService.route(directionsRequest,
      (response: any, status: any) =>  {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      }
    );
  }

}