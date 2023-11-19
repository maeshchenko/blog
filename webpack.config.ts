import path from "path";
import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type IBuildEnv, type IBuildPaths } from "./config/build/types/config";

const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
};

export default (env: IBuildEnv): webpack.Configuration => {
    const mode = env.mode ?? "development";
    const isDev = mode === "development";
    const PORT = env.port ?? 3000;

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
