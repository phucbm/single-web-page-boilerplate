const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {paths, packageInfo, bannerConfig, env} = require('./config');

/**
 * Sample variables: "cross-env TARGET=umd"
 * TARGET: libraryTarget
 */
const libraryTarget = env.TARGET || 'umd';
const isMinified = env.MIN === 'yes';
let filename, experiments = {}, library = undefined;
switch(libraryTarget){
    case "module":
        filename = `${packageInfo.outputFilename}.module.js`;
        experiments = {
            outputModule: true,
        };
        break;
    default:
        //library = `${packageInfo.codeName}`;
        if(isMinified){
            filename = `${packageInfo.outputFilename}.min.js`;
        }else{
            filename = `${packageInfo.outputFilename}.js`;
        }
}

module.exports = {
    mode: 'production',
    devtool: false,
    entry: paths.entry,
    experiments,
    output: {
        filename,
        library,
        libraryTarget,
        umdNamedDefine: true,
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: 'this',
    },
    plugins: [
        new webpack.BannerPlugin(bannerConfig)
    ],
    optimization: {
        minimize: isMinified,
        minimizer: [new TerserPlugin({extractComments: false})],
    },
};