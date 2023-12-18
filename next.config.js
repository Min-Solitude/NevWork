/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'i.pinimg.com',
            'firebasestorage.googleapis.com',
            'r4.wallpaperflare.com',
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|mp3)$/,
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
        API_KEY: 'AIzaSyA1oTiZyU_5VVvHLiPpfJixqcMuQkWq7oY',
        AUTH_DOMAIN: 'sofi-website-b4bb7.firebaseapp.com',
        PROJECT_ID: 'sofi-website-b4bb7',
        STORAGE_BUCKET: 'sofi-website-b4bb7.appspot.com',
        MESSAGING_SENDER_ID: '69731134414',
        APP_ID: '1:69731134414:web:acc7e42c9533bf03d4d99f',
        MEASUREMENT_ID: 'G-3VYS9RCYJ2',
    },
};

module.exports = nextConfig;
