const path = require("path");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [path.join(__dirname, 'src')],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        "presets": [
          [
            "es2015",
            { modules: false }
          ],
          "react",
          "stage-2"
        ]
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
