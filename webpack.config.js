'use strict';
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

// global css
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\]src[\/\\]/,
    use: [
        'style-loader?sourceMap',
        'css-loader',
    ],
});

// local scss modules
loaders.push({
    test: /\.scss$/,
    exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
    use: [
        'style-loader?sourceMap',
        'css-loader',
        'postcss-loader',
        'sass-loader?sourceMap',
    ],
});

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
    use: [
        'style-loader?sourceMap',
        'css-loader',
    ],
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx',
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: `http://${HOST}:${PORT}/`,
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: loaders,
    },
    devServer: {
        contentBase: './public',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST,
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackNotifierPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'React Redux Build',
        }),
    ],
};
