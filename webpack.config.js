// Node.js path module
const path = require('path'); 

// Create and export webpack configuration object
module.exports = { 
  // Entry Setting
  entry: './src/index.ts',

  // set mode
  mode: "development",

  // Compile TS into JS using "ts-loader" package
  module: {
    rules: [
      // rule One
      {
        test: /\.ts$/, // file ending with .ts
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  // Resolve ES6 imports.
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // SourceMaps creates a link between compiled output and sourcode
  // "sourceMap": true, in tsconfig file.
  // for dev, use "eval-source-map" because it's faster. For prod, use "source-map"
  devtool: 'eval-source-map',

  // Output Setting
  output: {
    // Upon making live changes in the source code, the changes are not picked up by the dev server. Why ?
    // Is it because the webpack dev server is not recompiling the sourcecode ??? 
    // The truth is, it is recompilling but it's not rebuilding the code and spitting it out in a bundle.
    // It's not the job of dev server to do so but it's the job of webpack build.
    // Webpack dev server re-compiles the code and saves it in memory, we only need to tell webpack where to serve this code that it has in memory by using "publicPath". It's relative URL.
    publicPath: 'public',
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // path.resolve() creates an absolute path string.
  },
};