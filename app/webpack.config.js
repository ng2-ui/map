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
          { loader: 'ts-loader' },
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
      new webpack.optimize.UglifyJsPlugin({
        mangle: { screw_ie8: true },
        compress: {
          warnings: false,
        },
        ascii_only: true,
        output: { ascii_only: false },
        sourceMap: false,
        comments: false
      })
    ];
    config.module.rules.push({
      test: /\.ts$/, use: 'strip-loader?strip[]=debug,strip[]=console.log'
    });
  }

  return config;
}
