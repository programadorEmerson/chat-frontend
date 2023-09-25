import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { parseCookies } from 'nookies';

import { TOKEN_PREFIX } from '@/utils/tokens';

export class ApiService {
  constructor(
    private token = parseCookies()[`${TOKEN_PREFIX}`],
    private apiConfig = axios.create({ baseURL : process.env.NEXT_PUBLIC_API_URL }),
  ) {
    this.initConfig();
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data : response } = await this.apiConfig.get<T>(url, config);
    return response;
  }

  public async post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const { data : response } = await this.apiConfig.post<T>(url, data, config);
    return response;
  }

  public async put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const { data : response } = await this.apiConfig.put<T>(url, data, config);
    return response;
  }

  public async patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const { data : response } = await this.apiConfig.patch<T>(url, data, config);
    return response;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data : response } = await this.apiConfig.delete<T>(url, config);
    return response;
  }

  public async interceptorsResponse(config: AxiosResponse): Promise<AxiosResponse> {
    return config;
  }

  public interceptorsRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    if (!this.token) return config;

    const headers = (config as AxiosRequestConfig).headers!;
    headers['Authorization'] = `Bearer ${this.token}`;
    return config;
  }

  public initInterceptors(): void {
    this.apiConfig.interceptors.response.use((config: AxiosResponse) => config);

    this.apiConfig.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (!this.token) return config;
      if (config.headers) config.headers['Authorization'] = `Bearer ${this.token}`;
      return config;
    });
  }

  public async initConfig(): Promise<AxiosInstance> {
    this.initInterceptors();
    return this.apiConfig;
  }

  public getApiToken(): string {
    return this.token;
  }
}
