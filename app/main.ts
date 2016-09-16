// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule }     from "@angular/http";

//noinspection TypeScriptCheckImport
import { Ng2MapModule }   from 'ng2-map';

import { AppComponent }   from './app.component';

import {APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS} from "./app.route";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, APP_ROUTER_PROVIDERS, Ng2MapModule ],
  declarations: [AppComponent, APP_ROUTER_COMPONENTS],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
