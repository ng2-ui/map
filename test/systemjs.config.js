(function(global) {

  var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

  //map tells the System loader where to look for things
  var  map = {
    'app':          'app',

    '@angular':     'node_modules/@angular', // sufficient if we didn't pin the version
    'rxjs':         'node_modules/rxjs',
    'typescript':   'node_modules/typescript/lib/typescript.js',
    'ts':          'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js'
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' }
  };

  /**
   * For test of node module publish, visit http://plnkr.co/edit/32syXF?p=preview 
   */
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'node_modules/@angular/' + pkgName;
  });

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

  // For Development tet
  map['ng2-map'] = 'src';
  packages['ng2-map'] = { main: 'index.ts', defaultExtension: 'ts' };

  // For node_modules test
  // map['ng2-map'] = 'dist';
  // packages['ng2-map'] = { main: 'index.js', defaultExtension: 'js' };
  
  var config = {
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
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
