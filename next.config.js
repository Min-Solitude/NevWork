/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos',
                    outputPath: 'static/videos',
                    name: '[name].[hash].[ext]',
                },
            },
        });

        return config;
    },
    env: {
        PATH_URL_BACKEND: 'http://192.168.1.42:8080/api',
    },
};

module.exports = nextConfig;
