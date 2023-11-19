import TerserPlugin from 'terser-webpack-plugin';

export function buildOptimization () {
    return {
        minimizer: [new TerserPlugin({
            extractComments: false
    })]
    };
}
