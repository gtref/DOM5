const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dom.js',
    library: 'dom',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'development'
};
