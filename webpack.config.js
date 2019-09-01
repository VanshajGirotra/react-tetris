const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  mode: 'development',
  watch: true,
};
const clientConfig = {
  entry: './src/client.js',
  output: {
    filename: 'clientbundle.js',
    path: `${__dirname}/assets`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  target: 'web',
};
const serverConfig = {
  entry: './src/index.js',
  output: {
    filename: 'serverbundle.js',
    path: `${__dirname}/build`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  node: {
    __dirname: false, // https://webpack.js.org/configuration/node/#node__dirname
  },
  externals: [nodeExternals()], // https://www.npmjs.com/package/webpack-node-externals
};
module.exports = [{ ...baseConfig, ...serverConfig }, { ...baseConfig, ...clientConfig }];
