const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
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
      { test: /\.html$/, loader: 'raw' },
    ]
  },
  ts: {
    include: ['src/**/*.ts', 'app/**/*.ts'],
  },
  plugins: [
    new DashboardPlugin()
  ],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js',
  },
};
