const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve('./src/css/main.scss'),
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    // ...
    module: {
        rules: [
            {
                test: /\.s?css$/,// ...
                include: [
                    path.resolve(__dirname, 'src/css/main.scss'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    require('tailwindcss'),
                                    require('postcss-import'),
                                    require('tailwindcss'),
                                    require('postcss-nested'), // or require('postcss-nesting')
                                    require('autoprefixer'),
                                    // require('autoprefixer'),

                                ],
                            },
                        }
                    },

                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '/css/[name].css'
        })
    ]
}
