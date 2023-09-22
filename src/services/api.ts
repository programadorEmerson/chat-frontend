import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import jwtDecode from 'jwt-decode';

import { TOKEN_PREFIX } from '@/utils/tokens';

import { parseCookies } from 'nookies';

export class ApiService {
  constructor(
    private cookies = parseCookies(),
    private token = cookies[`${TOKEN_PREFIX}`],
    private apiConfig = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    }),
  ) {
    this.initConfig();
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.apiConfig.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.put<T>(url, data, config);
    return response.data;
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.patch<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.apiConfig.delete<T>(url, config);
    return response.data;
  }
  
  public async interceptorsResponse(
    config: AxiosResponse,
    ): Promise<AxiosResponse> {
      return config;
    }
    
  public interceptorsRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    if (!this.token) {
      return config;
    }

    const headers = (config as any).headers;
    headers['Authorization'] = `Bearer ${this.token}`;
    return config;
  }
    

  public initInterceptors(): void {
    this.apiConfig.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!this.token) {
          return config;
        }

        const headers = config.headers;
        if (headers) {
          headers['Authorization'] = `Bearer ${this.token}`;
        }
        return config;
      }
    );
    this.apiConfig.interceptors.response.use((config: AxiosResponse) => {
      return config;
    });

    this.apiConfig.interceptors.response.use((config: AxiosResponse) => {
      return config;
    });
  }

  public async initConfig(): Promise<AxiosInstance> {
    await this.initInterceptors();
    return this.apiConfig;
  }

  public getApiToken(): string {
    return this.token;
  }

  public async getApiCookie(cookie: string): Promise<string> {
    return this.cookies[cookie];
  }
}
