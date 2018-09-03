const merge = require('webpack-merge')
const baseCinfig = require('./webpack.config.base')
const webpack = require('webpack')
// const DashboardPlugin = require('webpack-dashboard/plugin')


const config = merge(baseCinfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: '8080',
    hot: true,
    overlay: {
      errors: true
    },
    historyApiFallback: true,
    publicPath: '/',
    clientLogLevel: 'none',
    compress: true
    // quiet: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new DashboardPlugin() // 在控制台插件
  ]
})

module.exports = config
