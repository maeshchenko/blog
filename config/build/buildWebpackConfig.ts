import {IBuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";
import {buildOptimization} from "./buildOptimization";

export function buildWebpackConfig(options:IBuildOptions){
    return {
        'mode': options.mode,
        entry: options.paths.entry,
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
        optimization: buildOptimization(),
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
            path: options.paths.build,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
    }
}
