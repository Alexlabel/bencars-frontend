import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

    webpack(config) {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            react: path.resolve(__dirname, "node_modules/react"),
        };
        return config;
    },
};

export default nextConfig;
