/**
 * This file is only for debugging. This can be removed when webpack .ts source mapping is good enough
 **/
(function(global) {
  var paths = { // paths serve as alias
    'npm:': 'https://unpkg.com/'
  };
  var map = {
    // our app is within the app folder
    app: '.',

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
    '@angular2-material/core': 'npm:@angular2-material/core.js',
    '@angular2-material/input': 'npm:@angular2-material/input.js',
    'rxjs':                      'npm:rxjs',
    'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    'ts':                        'npm:plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                'npm:typescript@2.0.3/lib/typescript.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  packages = {
    app: { main: './main.ts', defaultExtension: 'ts' },
    rxjs: { defaultExtension: 'js' }
  };

  map['ng2-map'] = '../src';
  packages['ng2-map'] =  { main: 'index.ts', defaultExtension: 'ts'};

  System.config({
    transpiler: 'typescript', //use typescript for compilation
    //transpiler: 'ts',
    typescriptOptions: {      //typescript compiler options
      emitDecoratorMetadata: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: paths,
    map: map,
    packages: packages
  });
})(this);

