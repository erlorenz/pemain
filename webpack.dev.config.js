const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config.js')

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  "css-loader", 
                ]
              },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin();
    ]
})