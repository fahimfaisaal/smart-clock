const path = require('path');

let mode = "development",
    target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    EslintWebpackPlugin = require("eslint-webpack-plugin"),
    ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: mode,
    target: target,
    entry: "./src/js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            }, {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new EslintWebpackPlugin({
            formatter: 'codeframe',
            emitError: false,
            emitWarning: false
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    ['svgo', {
                        plugins: [
                            {
                                removeViewBox: false
                            }
                        ]
                    }]
                ]
            }
        })
    ],
    devtool:false
}