import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule }    from "@angular/http";

import { AppComponent }   from './app.component';
import { Ng2MapModule } from 'ng2-map';
import {APP_ROUTER_PROVIDERS} from "./app.route";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, APP_ROUTER_PROVIDERS, Ng2MapModule ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }