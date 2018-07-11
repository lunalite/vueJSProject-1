const path = require('path')
const webpack = require('webpack')
const config = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js'),
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.js$)|(\.vue$)/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: "development",
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {}
        })
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js'
    }
}

module.exports = config