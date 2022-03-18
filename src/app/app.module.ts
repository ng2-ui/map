import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NguiUtilsModule } from '@ngui/utils';
import { NguiMapModule } from '@ngui/map';
import { SourceCodeService } from './source-code.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { Codeblock } from 'ng2-prism/codeblock';

import { APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        APP_ROUTER_PROVIDERS,
        // NguiMapModule,
        NguiMapModule.forRoot({
            apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
            '&libraries=visualization,places,drawing',
        }),
        NguiUtilsModule
    ],
    declarations: [AppComponent, APP_ROUTER_COMPONENTS],
    providers: [
        SourceCodeService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
