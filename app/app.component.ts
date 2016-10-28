import { Component } from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.tpl.html',
})
export class AppComponent {
  public center = 'Brampton, Canada';
  public positions = [ ];

  constructor() {
    Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM';
  }
}
