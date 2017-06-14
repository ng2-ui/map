const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      '@ngui/map': path.join(__dirname, '..', 'src', 'index')
    }
  },
  entry: './app/main.ts',
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        use: [
          {
            loader: 'ts-loader',
            options: {
              include: ['src/**/*.ts', 'app/**/*.ts']
            },
          },
          'angular2-template-loader'
        ],
      },
      { test: /\.html$/, use: ['raw-loader'] }
    ]
  },
  plugins: [],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

module.exports =  function(env) {
  config.devtool = env === 'production' ? false : 'source-map';
  if (env === 'production') {
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ];
    config.module.rules.push({
      test: /\.ts$/, use: 'strip-loader?strip[]=debug,strip[]=console.log'
    });
  }

  return config;
}
