export interface ApiImpl {
  setAuthToken(token: string): void;
  resetAuthToken(): void;

  restGet<TQuery, T>(url: string, params?: TQuery): Promise<T>;

  restPost<TData, T>(url: string, data: TData): Promise<T>;

  restPut<TData, T>(url: string, data: TData): Promise<T>;

  restDelete<T>(url: string): Promise<T>;
}
