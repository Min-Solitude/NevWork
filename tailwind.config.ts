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

                'cl-white': '#ffffff',
                'cl-pink': '#fe7fc4',
                'cl-black': '##111111',
                'cl-yellow': '#ffd674',
                'cl-yellow-dark': '#f3a952',

                'cl-btn-light-bg-primary': '#f1f1f190',
                'cl-btn-dark-bg-primary': '#141414',

                'cl-btn-light-bd-primary': '#e0e0e0',
                'cl-btn-dark-bd-primary': '#2c2c2c',
            },
            backgroundColor: {
                'bg-black-90': '#00000090',
                'bg-input-form': '#ffffff80',
            },
            textColor: {
                'cl-text-black': '#1d1d1d',
                'cl-text-gray': '#4e4e4e',
                'cl-text-silver': '#bdbdbd',
            },
            boxShadow: {
                'sd-primary': '2px 4px 12px rgba(0,0,0,.08)',
            },
            fontSize: {
                base: '14px',
                icon: '18px',
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
