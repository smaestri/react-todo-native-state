var path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

console.log(PATHS.app)

module.exports = {
  entry: './app/main.js',
  output: {
    path: PATHS.build,
    // publicPath: "/",
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },

  devtool: 'source-map',

  module: {
    loaders:[
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, "/src"),
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]

  }
}
