'use strict';
 
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    home: "./home",
    about: "./about",
    app: "./app",
    login: "./login",
    logout: "./logout",
    commons: ["./welcome" , "./commons"]
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: "[name].js",
    library:  "[name]"
  },

  externals: {
    lodash: '_'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-eval-module-source-map' : false,

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      chanks: ["home", "name"]
    }),
    new webpack.ProvidePlugin({
      lodashPr: 'lodash'
    })
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['*-loader', '*'],
    extensions: ['.js']
  },

  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include:  __dirname + '/frontend',
            options: {
              // presets: ['env'],
              // plugins: ['transform-runtime']
            },
            exclude: /\/node_modules\//
        }
    ],
    noParse: /angular\/angular.js/ 
  }
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          output: {
              comments: false
          },
          compress: {
              // don't show unreacheble variables etc
              warnings: false,
              drop_console: true,
              unsafe: true
          }
      }))
}