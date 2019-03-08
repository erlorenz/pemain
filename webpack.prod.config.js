const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", 
                ]
              },
        ]
    },
  optimization: {
      minimize: true,
      runtimeChunk: true,
      splitChunks: {
          chunks: 'all',
          name: false,
      },
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin(),
    ]
  }
,
plugins: [
    new MiniCssExtractPlugin({
        filename: '[contenthash:8].css',
        chunkFilename: "[name].chunk.css"
      }),
]
})