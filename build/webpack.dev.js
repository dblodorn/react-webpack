var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../config');
var WebpackCommon = require('./webpack.common');

Object.keys(WebpackCommon.entry).forEach(function (name) {
  WebpackCommon.entry[name] = ['./build/dev-client'].concat(WebpackCommon.entry[name]);
});

module.exports = merge(WebpackCommon, {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
