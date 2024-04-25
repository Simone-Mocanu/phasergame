const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./game.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;