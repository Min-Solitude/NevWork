import axios from 'axios';

const http = axios.create({
    baseURL: `${process.env.PATH_URL_BACKEND}`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;
