import {Injectable} from '@angular/core';

@Injectable()
export class MapListenerService {

  public mapReady = (map) => {
    if (typeof window !== 'undefined' && (<any>window)['nguiMapRef']) {
      // expose map object for test and debugging on (<any>window)
      (<any>window)['nguiMapRef'].map = map;
    }
  }
}
