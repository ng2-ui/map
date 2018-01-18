import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Plunker} from 'create-plunker';
import 'rxjs/add/operator/map';

@Injectable()
export class SourceCodeService {

  constructor(private http: Http) { }

  getText(klassName: string) {
    let urlPrefix = 'https://raw.githubusercontent.com/ng2-ui/map/master/app/map-components';
    let fileName = klassName.
      replace('Directive', '.directive.ts').
      replace('Service', '.service.ts').
      replace('Component', '.component.ts').
      replace(/([A-Z])/g, (_, $1) => `-${$1.toLowerCase()}`).
      replace(/^-/, '');
    let url = `${urlPrefix}/${fileName}`;

    return this.http.get(url).
      map((res: Response) => appComponentTsCode(res.text()));
  }

  plnkr(code: string) {
    Plunker.create()
      .setDescription('Angular2+ ng2-ui map demo')
      .addIndexHeadLine(`<title>Ngui Map</title>`)
      .addIndexHeadLine(`<meta charset="UTF-8">`)
      .addIndexHeadLine(`<meta name="viewport" content="width=device-width, initial-scale=1">`)
      .addIndexHeadLine(`<script src="https://unpkg.com/core-js/client/shim.min.js"></script>`)
      .addIndexHeadLine(`<script src="https://unpkg.com/zone.js@0.6.25?main=browser"></script>`)
      .addIndexHeadLine(`<script src="https://unpkg.com/reflect-metadata@0.1.3"></script>`)
      .addIndexHeadLine(`<script src="https://unpkg.com/systemjs@0.19.27/dist/system.src.js"></script>`)
      .addFile({name: 'app.component.ts', contents: appComponentTsCode(code)})
      .addFile({name: 'main.ts', contents: mainTsCode()})
      .addFile({name: 'systemjs.config.js', contents: systemjsConfigJsCode()})
      .addFile({name: 'tsconfig.json', contents: tsconfigJsonCode()})
      .addIndexHeadLine(`<script> System.import('app');</script>`)
      .setIndexBody(`<my-app>Loading...</my-app>`)
      .save();
  }
}

function tsconfigJsonCode() {
  return `
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  }
}
  `;
}

function mainTsCode() {
  return `
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { NguiMapModule } from '@ngui/map';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
  `;
}

function appComponentTsCode(code) {
  return code
    .replace(`@Component({`, `@Component({\n  selector: 'my-app',`)
    .replace(`\nimport { SourceCodeService } from '../source-code.service';`, '')
    .replace(`<pre class="prettyprint">{{code}}</pre>`, '')
    .replace(/sc\.getText\(['"A-Za-z0-9]+\)\.subscribe\(text => this\.code = text\);/, '')
    .replace(/[, public]*sc: SourceCodeService\)/, ')')
    .replace(/<code>[\s\S]*<\/code>/, '')
    .replace(`code: string;`, '')
    .replace(/constructor\s*\(\)\s*{\s*}/m, '')
    .replace(`<button (click)="sc.plnkr(code)">See in plunker</button>`, '')
    .replace(/export class [A-Za-z0-9]+Component/, 'export class AppComponent')
    .replace(/^\s*\n/gm, '\n');
}

function systemjsConfigJsCode() {
  return `
System.config({
  // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true
  },
  meta: {
    'typescript': {
      "exports": "ts"
    }
  },
  paths: {     // paths serve as alias
    'npm:': 'https://unpkg.com/'
  },
  map: {      // map tells the System loader where to look for things
    app: '.', // our app is within the app folder

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

    // other libraries
    'rxjs':                       'npm:rxjs',
    'ts':                         'npm:plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'npm:typescript@2.0.2/lib/typescript.js',

    '@ngui/map': 'npm:@ngui/map/dist/bundles/map.umd.js'
  },
  packages: {   // packages tells the System loader how to load when no filename and/or no extension
    app: { main: './main.ts', defaultExtension: 'ts' },
    rxjs: { defaultExtension: 'js' }
  }
});
  `;
}
