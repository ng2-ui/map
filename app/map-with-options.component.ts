import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Map With Options - satellite view</h1>
    <ng2-map [options]="allOptions" center="36.964, -122.015"></ng2-map>
    <pre>&lt;ng2-map [options]="allOptions">&lt;/ng2-map></pre>
    allOptions: <pre> {{ allOptions | json}}</pre>
  `,
})
export class MapWithOptionsComponent {
  allOptions = {
    center: {lat: 36.964, lng: -122.015},
    zoom: 18,
    mapTypeId: 'satellite',
    tilt: 45
  };
}
