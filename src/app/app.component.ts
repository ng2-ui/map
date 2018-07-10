import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var PR: any;

@Component({
  selector: 'ngui-map-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(router: Router) {

    router.events.subscribe(event => {
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
