// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    
    config.node = { fs: 'empty' };


    return config;
  }
};

