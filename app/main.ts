// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Ng2UtilsModule} from "ng2-utils";
//noinspection TypeScriptCheckImport
import { Ng2MapModule } from 'ng2-map';

import { AppComponent } from './app.component';

import { APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS,
    // Ng2MapModule,
    Ng2MapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing',
    }),
    Ng2UtilsModule ],
  declarations: [AppComponent, APP_ROUTER_COMPONENTS],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
