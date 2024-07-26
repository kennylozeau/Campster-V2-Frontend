const path = require('path');

module.exports = {
  entry: './campster.jsx',
  output: {
    path: path.resolve(__dirname, 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devtool: 'dev-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};
