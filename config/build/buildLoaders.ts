import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions) {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes(".module.scss")),
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2|tff|otf)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [babelLoader, typescriptLoader, stylesLoader, svgLoader, fileLoader];
}
