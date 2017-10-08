declare var PR: any;

import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngui-map-app',
  templateUrl: './app.html',
})
export class AppComponent {
  public center = 'Brampton, Canada';
  public positions = [ ];
  constructor(router: Router) {
    router.events.subscribe( event => {
      // TODO: bad idea to deal with document directly
      if (document.querySelector('.prettyprinted')) {
        document.querySelector('.prettyprinted').classList.remove('prettyprinted');
      }
      if (event instanceof NavigationEnd) { // Start, Cancel, Error
        setTimeout(e => PR.prettyPrint(), 500);
      }
    });
  }
}
