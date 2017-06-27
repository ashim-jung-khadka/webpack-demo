var webpack = require('webpack');

module.exports = {
  entry: {
    Template: ['./src/js/index.js'],
  },
  output: {
    path: __dirname + "/build",
    filename: 'bundle.[name].js',
    libraryTarget: 'var',
    library: ["[name]"],
    publicPath: '/build'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.hbs$/,
      use: [{
        loader: "handlebars-loader",
        options: {
          helperDirs: __dirname + "/src/js/helpers"
        }
      }]
    }]
  },
  devServer: {
    port: 3000,
    inline: true
  },
  // plugins: [new webpack.optimize.UglifyJsPlugin()]
}
