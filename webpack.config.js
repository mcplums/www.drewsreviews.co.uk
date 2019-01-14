const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
/*  target: 'node',
    externals: [nodeExternals()],*/
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: "index.html" },
      { from: './app/header.html', to: "header.html" },
      { from: './app/images/', to: "images/" },
      { from: './app/addreview.html', to: "addreview.html" },
      { from: './app/editreview.html', to: "editreview.html" },
      { from: './app/deleteuserreview.html', to: "deleteuserreview.html" },
      { from: './app/userreviews.html', to: "userreviews.html" },
      { from: './app/posters/', to: "posters/" },

    ])
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
