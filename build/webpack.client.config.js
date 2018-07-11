const base = require('./webpack.base.config')
// const webpack = require('webpack')

const config = Object.assign({}, base, {
  plugins: (base.plugins||[])
});

module.exports = config
