import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { NG2_MAP_DIRECTIVES } from "ng2-map";


@Component({
  selector: 'my-app',
  directives: [ NG2_MAP_DIRECTIVES ],
  template: `<div #mapComponents></div>`
})
export class AppComponent {
  public center ="Brampton, Canada";
  public positions=[];
  @ViewChild('mapComponents', {read: ViewContainerRef}) mapComponents;

  constructor(private compResolver:ComponentResolver) {}

  ngAfterViewInit(){
    let url = 'app/simple-map.component.ts';
    this.loadComponentRemotely(url);
  }

  loadComponentRemotely(url) {
    try {
      this.mapComponents.remove(0);
    } catch(e) {}

    let importer = url => Observable.fromPromise(System.import(url));
    let resolve = comp => Observable.fromPromise(this.compResolver.resolveComponent(comp));

    importer(url)
      .switchMap(comp => resolve(comp.SimpleMapComponent))
      .subscribe(factory => this.mapComponents.createComponent(factory, 0))
  }

  clicked(marker) {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }

  showRandomMarkers() {
    let randomLat: number, randomLng: number;
    
    this.positions = [];
    for (let i=0; i<9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }
}
