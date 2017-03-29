import { Injectable, Inject, Optional, NgZone, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { NG_MAP_CONFIG_TOKEN } from './config';
import { isMapsApiLoaded } from './util';
import { first } from 'rxjs/operator/first';

export abstract class NgMapApiLoader implements OnDestroy {
  api$: ReplaySubject<any> = first.call(new ReplaySubject(1));
  abstract load();

  constructor(protected config) {
    this.config = this.config || {apiUrl: 'https://maps.google.com/maps/api/js'};
  }

  ngOnDestroy() {
    this.api$.complete();
  }
}

@Injectable()
export class NgMapAsyncCallbackApiLoader extends NgMapApiLoader {
  constructor(protected zone: NgZone, @Optional() @Inject(NG_MAP_CONFIG_TOKEN) config) {
    super(config);
  }

  load() {
    if (typeof window === 'undefined') {
      return;
    }

    if (isMapsApiLoaded()) {
      this.api$.next(google.maps);
    } else if (!document.querySelector('#ngui-map-api')) {
      (<any>window)['nguiMapRef'] = (<any>window)['nguiMapRef'] || [];
      (<any>window)['nguiMapRef'].push({ zone: this.zone, componentFn: () => this.api$.next(google.maps)});
      this.addGoogleMapsApi();
    }
  }

  private addGoogleMapsApi() {
    (<any>window)['initNguiMap'] = (<any>window)['initNguiMap'] || function() {
      (<any>window)['nguiMapRef'].forEach(nguiMapRef => {
        nguiMapRef.zone.run(function() { nguiMapRef.componentFn(); });
      });
      (<any>window)['nguiMapRef'].splice(0, (<any>window)['nguiMapRef'].length);
    };

    let script = document.createElement( 'script' );
    script.id = 'ngui-map-api';

    // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
    let apiUrl = this.config.apiUrl ;
    apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
    script.src = apiUrl + 'callback=initNguiMap';
    document.querySelector('body').appendChild(script);
  }
}

@Injectable()
export class NgMapAsyncApiLoader extends NgMapApiLoader {
  constructor(@Optional() @Inject(NG_MAP_CONFIG_TOKEN) config) {
    super(config);
  }

  load() {
    if (typeof window === 'undefined') {
      return;
    }

    if (isMapsApiLoaded()) {
      this.api$.next(google.maps);
    } else if (!document.querySelector('#ngui-map-api')) {
      let script = document.createElement('script');
      script.id = 'ngui-map-api';

      script.async = true;
      script.onload = () => this.api$.next(google.maps);
      script.src = this.config.apiUrl;
      document.querySelector('body').appendChild(script);
    }
  }
}
