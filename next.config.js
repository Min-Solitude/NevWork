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
        PATH_URL_BACKEND: 'http://localhost:8080/api',
        API_KEY: 'AIzaSyAW4418ULAUwbWGR44dMBU4TsBwT1OCk78',
        AUTH_DOMAIN: 'sofi-e22d0.firebaseapp.com',
        PROJECT_ID: 'sofi-e22d0',
        STORAGE_BUCKET: 'sofi-e22d0.appspot.com',
        MESSAGING_SENDER_ID: '399211119634',
        APP_ID: '1:399211119634:web:88bfb3f506b2cefc9c44cb',
        MEASUREMENT_ID: 'G-0VLQBC6SSD',
    },
};

module.exports = nextConfig;
