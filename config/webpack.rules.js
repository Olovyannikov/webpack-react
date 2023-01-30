const { isDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styleLoader = isDev() ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = [
    {
        // Typescript loader
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            },
        },
    },
    {
        // CSS Loader
        test: /\.css$/i,
        exclude: /\.module\.css/i,
        use: [
            { loader: styleLoader },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: false,
                },
            },
            { loader: 'postcss-loader' },
        ],
    },
    {
        test: /\.module\.css$/i,
        use: [
            { loader: styleLoader },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: {
                        localIdentName: isDev()
                            ? '[folder]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            { loader: 'postcss-loader' },
        ],
    },
    {
        // SCSS (SASS) Loader
        test: /\.s[ac]ss$/i,
        use: [
            { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev()
                            ? '[folder]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            { loader: 'sass-loader' },
        ],
    },
    {
        // Less loader
        test: /\.less$/,
        use: [
            { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'less-loader' },
        ],
    },
    {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    },
];