import { ApiImpl } from './api.impl';
import Taro from '@tarojs/taro';

export class TaroHttpClient implements ApiImpl {
  private authToken: string | null = null;
  private baseUrl: string = 'http://localhost:3000';

  protected setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public resetAuthToken(): void {
    this.authToken = null;
  }

  public async restGet<TQuery, T>(url: string, params?: TQuery): Promise<T> {
    const response = await Taro.request({
      method: 'GET',
      url: this.getUrl(url),
      data: params,
      mode: 'cors',
      header: this.getHeaders(),
    });

    return response.data;
  }

  public async restPost<TData, T>(url: string, data: TData): Promise<T> {
    console.log('post data', data);
    const response = await Taro.request({
      method: 'POST',
      url: this.getUrl(url),
      data: data,
      mode: 'cors',
      header: this.getHeaders(),
    });

    return response.data;
  }

  public async restPut<TData, T>(url: string, data: TData): Promise<T> {
    const response = await Taro.request({
      method: 'PUT',
      url: this.getUrl(url),
      data: data,
      mode: 'cors',
      header: this.getHeaders(),
    });

    return response.data;
  }

  public async restDelete<T>(url: string): Promise<T> {
    const response = await Taro.request({
      method: 'DELETE',
      url: this.getUrl(url),
      mode: 'cors',
      header: this.getHeaders(),
    });

    return response.data;
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};

    if (this.authToken) {
      headers.Authorization = `Bearer ${this.authToken}`;
    }

    return headers;
  }

  private getUrl(url: string): string {
    return `${this.baseUrl}${url}`
  }
}
