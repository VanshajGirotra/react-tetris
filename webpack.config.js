const baseConfig = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: ['node_modules', 'serverBuild'],
  },
};
const clientConfig = {
  entry: './src/client.js',
  output: {
    filename: 'clientbundle.js',
    path: `${__dirname}/build`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
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
      },
    ],
  },
  target: 'node',
  node: {
    __dirname: false, // https://webpack.js.org/configuration/node/#node__dirname
  },
};
module.exports = [{ ...baseConfig, ...serverConfig }, { ...baseConfig, ...clientConfig }];
