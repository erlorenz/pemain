const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    quiet: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
