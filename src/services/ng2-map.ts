import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class Ng2Map {
  public map;  // google map instance
  public mapReady$ = new Subject();
}

