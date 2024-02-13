import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosResponse,
    HttpStatusCode,
    type InternalAxiosRequestConfig,
} from 'axios';
import AxiosConfig from '@/common/configs/axios.config';
import EStoreKeys from '@/common/enums/store-keys.enum';
import { localStorageService } from '@/common/services/local-storage.service';
import { jwtDecode } from 'jwt-decode';
import { type IResponseRefreshToken } from '@/apis/auth/types/auth.type';

interface IAxiosConfigCustom extends InternalAxiosRequestConfig {
    isNotRequiredAuthentication?: boolean;
}

export class HttpService {
    private readonly axiosInstance: AxiosInstance;
    constructor(config = AxiosConfig) {
        const instance = axios.create({ ...config });
        Object.assign(instance, this.setupInterceptorsTo(instance));
        this.axiosInstance = instance;
    }

    private setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
        axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
        axiosInstance.interceptors.response.use(this.onResponse, this.onResponseError);
        return axiosInstance;
    }

    private async onRefreshToken(): Promise<any> {
        try {
            const refreshToken = localStorageService.get(EStoreKeys.REFRESH_TOKEN, '');
            if (refreshToken === true) {
                // TODO: handle refresh token
                const res: any = await this.post<IResponseRefreshToken>('auth/refresh-token', {
                    refreshToken,
                });
                localStorageService.set(EStoreKeys.ACCESS_TOKEN, res.data.data.accessToken);
                localStorageService.set(EStoreKeys.REFRESH_TOKEN, res.data.data.refreshToken);
                return res.data.data.accessToken;
            } else {
                window.location.href = 'auth/login';
            }
        } catch (error: any) {
            if (error.response.status === 403) {
                localStorageService.remove(EStoreKeys.ACCESS_TOKEN);
                localStorageService.remove(EStoreKeys.REFRESH_TOKEN);
            }
            console.log(error);
        }
    }

    private readonly onRequest = async (
        config: IAxiosConfigCustom,
    ): Promise<IAxiosConfigCustom> => {
        const { ACCESS_TOKEN } = EStoreKeys;
        if (!config.isNotRequiredAuthentication) {
            if (config.headers) {
                let accessToken: string = localStorageService.get<string, string>(ACCESS_TOKEN, '');
                if (accessToken) {
                    const expireTime = (jwtDecode(accessToken)?.exp ?? 1) * 1000;
                    const isExpiredToken = expireTime < new Date().getTime();
                    if (isExpiredToken) {
                        accessToken = await this.onRefreshToken();
                    }
                    Object.assign(config.headers, {
                        Authorization: `Bearer ${accessToken}`,
                    });
                }
            }
            return config;
        }
        return config;
    };

    private readonly onRequestError = async (error: AxiosError): Promise<AxiosError> => {
        console.error(`[request error] [${JSON.stringify(error)}]`);
        return await Promise.reject(error);
    };

    private readonly onResponse = (response: AxiosResponse): any => {
        return response.data;
    };

    private readonly onResponseError = async (error: AxiosError): Promise<AxiosError> => {
        const statusCode = error?.response?.status;
        switch (statusCode) {
            case HttpStatusCode.Unauthorized:
                if (
                    typeof window !== 'undefined' &&
                    !window.location.pathname.startsWith('/auth')
                ) {
                    window.location.replace('/auth/sign-in');
                }
                break;
            default: {
                console.log(error);
                break;
            }
        }
        return await Promise.reject(error);
    };

    public async get<T>(url: string, config?: IAxiosConfigCustom): Promise<T> {
        return (await this.axiosInstance.get<T>(`${url}`, config)) as T;
    }

    public async post<T>(url: string, data?: any, config?: IAxiosConfigCustom): Promise<T> {
        return (await this.axiosInstance.post<T>(url, data, config)) as T;
    }

    public async put<T>(url: string, data?: any, config?: IAxiosConfigCustom): Promise<T> {
        return (await this.axiosInstance.put<T>(url, data, config)) as T;
    }

    public async patch<T>(url: string, data: any, config?: IAxiosConfigCustom): Promise<T> {
        return (await this.axiosInstance.patch<T>(url, data, config)) as T;
    }

    public async delete(url: string, config?: IAxiosConfigCustom): Promise<any> {
        return await this.axiosInstance.delete(url, config);
    }
}
