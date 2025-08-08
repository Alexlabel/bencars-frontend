// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;