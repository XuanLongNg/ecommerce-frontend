import type { AxiosRequestConfig } from 'axios';

const axiosConfigs = {
    local: {
        baseURL: 'http://localhost:4000/api',
        timeout: 10000,
    },
    development: {
        baseURL: 'http://157.245.48.233:4000/api',
        timeout: 10000,
    },
    production: {
        baseURL: 'http://157.245.48.233:4000/api',
        timeout: 10000,
    },
    test: {
        baseURL: 'http://localhost:3001/api/',
        timeout: 10000,
    },
};
const getAxiosConfig = (): AxiosRequestConfig => {
    const nextRuntime: string = process.env.REACT_APP_ENVIRONMENT ?? 'local';
    console.log('Environment', nextRuntime);
    return axiosConfigs[nextRuntime as keyof typeof axiosConfigs];
};

const axiosConfig = getAxiosConfig();

export default axiosConfig;
