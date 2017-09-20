/* global process, __dirname, module */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const projectDir = path.resolve(`${__dirname}/..`);

const isDev = process.env.NODE_ENV !== 'production';

// Set a random Public URL to share your website with anyone
const tunnel = true; // --> https://[RANDOM-HASH].localtunnel.me

// Or you can use a custom URL "http://mysuperwebsite.localtunnel.me"
// const tunnel = 'mysuperwebsite';

console.log('NODE_ENV:', process.env.NODE_ENV);

const config = {
    context: projectDir + '/src',
    devtool: 'source-map',
    entry: {
        'dashboard': './pages/dashboard/index.js',
        'monsters': './pages/monsters/index.js',
    },
    output: {
        path: path.resolve(projectDir, 'build'),
        filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                'exclude': /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        proxy: {
            "/api": {
                "target": 'https://api.qwant.com/api',
                "pathRewrite": { '^/api': '' },
                "changeOrigin": true,
                "secure": false
            }
        }
    },
    plugins: [
        // YOUR PROJECT PAGES
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['dashboard'],
            template: 'pages/dashboard/index.html',
        }),

        new HtmlWebpackPlugin({
            filename: 'monsters.html',
            chunks: ['monsters'],
            template: 'pages/monsters/index.html',
        }),

        // If you want to add more pages, just pass the path to your .thml file
        // new HtmlWebpackPlugin({
        //     chunks: ['my-page'], // JS file that the page is reading the assets.
        //     template: './pages/my-page/index.html',
        // }),

        // Multiple pages can read from the same JS entry point
        // new HtmlWebpackPlugin({
        //     chunks: ['index'], // read from the same entry point as `index.html`
        //     template: './pages/my-page/about.html',
        // }),

        new CopyWebpackPlugin([ { from: 'assets', to: 'assets' } ]),

        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                drop_console: !isDev,
                drop_debugger: !isDev,
                screw_ie8: true,
            },
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:3000/',
            ghostMode: { // Disable interaction features between different browsers
                clicks: false,
                forms: false,
                scroll: false
            },
            tunnel,
        }, {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        })
    ]
};

module.exports = config;
