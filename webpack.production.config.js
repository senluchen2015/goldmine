const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

// local css modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.css/,
    exclude: /(node_modules|bower_components|web)/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
    }),
});

// local scss modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.scss/,
    exclude: /(node_modules|bower_components|web)/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?!postcss-loader!sass-loader'],
    }),
});

// global css files
loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
    }),
});

module.exports = {
    entry: [
        './src/index.jsx',
    ],
    output: {
        path: path.join(__dirname, 'web'),
        filename: 'app-[chunkhash].js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: loaders,
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new WebpackNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('style-[contenthash].css'),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'React Redux Build',
        }),
    ],
};
