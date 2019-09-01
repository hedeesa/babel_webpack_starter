const path = require("path");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    // rules: [{
    //     test: /\.js?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader',
    //     query: {
    //        presets: ['@babel/preset-env', '@babel/preset-stage-0']
    //     }
    // }]
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "babel-loader"
      }
    ]
  }
};
