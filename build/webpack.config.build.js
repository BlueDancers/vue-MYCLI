const path = require('path')
const merge = require('webpack-merge')
const baseCinfig = require('./webpack.config.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = merge(baseCinfig, {
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname,'../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }
    // ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/, //这里虽然分离了,但是没有做到按需引入,看官方配置也不是很明白
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true
  }
})

module.exports = config
