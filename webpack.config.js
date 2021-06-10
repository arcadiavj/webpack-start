const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

 
module.exports = {
    mode: 'development',
    output:{
        clean: true,
    },
    module: {
        rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
            // Disables attributes processing
            sources: false,
            minimize: false,
            },
        },
        {
            test: /\.css$/i,
            exclude: /styles.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /styles.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'

        }
        ],
    },
    optimization: {},
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webPack App',
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',//[name].[fullhash].css para generar el nombre con un hash para que no gurde en cache 
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/", to: "assets/" },
              ],
        })
    ]
}