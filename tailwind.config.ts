import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FFC107',

                'cl-black': '##111111',

                'cl-text-gray': '#4e4e4e',

                'cl-btn-light-bg-primary': '#f1f1f1',
                'cl-btn-dark-bg-primary': '#141414',
                'cl-btn-light-bd-primary': '#e0e0e0',
                'cl-btn-dark-bd-primary': '#2c2c2c',
            },
            boxShadow: {
                'sd-primary': '2px 4px 12px rgba(0,0,0,.08)',
            },
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
        },
    },
    plugins: [],
};
export default config;
