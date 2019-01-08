const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    "app":'./src/index.js',
    "print": './src/print.js'
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    quiet: false, //控制台中不输出打包的信息
    noInfo: false,
    // hot: true,
    inline: true,
    lazy: false,
    progress: true, //显示打包的进度
    watchOptions: {
        aggregateTimeout: 300
    },
    port: '8080',
    clientLogLevel: 'error'
  },
  performance: {
    hints: 'warning'
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'HSBCnet'
      }),
      new CleanWebpackPlugin(['public'])
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }
}
