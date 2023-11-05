import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: webpack.Configuration = {
    'mode': 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    }),
        new webpack.ProgressPlugin({})],
};

export default config;
