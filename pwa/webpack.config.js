const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'bundle.js'
  },
  devServer: {
  	contentBase: path.resolve(__dirname, '../static'),
    port: 8080
	},
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new WebpackPwaManifest({
      name: 'Todo app',
      short_name: 'todoapp',
      start_url: 'https://af-talk-00.firebaseapp.com',
      theme_color: '#6666ff',
      background_color: '#3366cc',
      icons: [
        {
          src: path.join(__dirname, 'jonymelavo.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: 'icons'
        }
      ]
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './sw.js',
      exclude: []
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
