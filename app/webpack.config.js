const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      'ng2-map': '../src/index.ts'
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw' }
    ]
  },
  plugins: [],
  ts: {
    include: ['src/**/*.ts', 'app/**/*.ts']
  },
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

if (process.env.NODE_ENV !== 'prod') {
  config.plugins = [new DashboardPlugin()];
} else {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ];
}

module.exports = config;
