import { TaroHttpClient } from './api.class';
import { ApiImpl } from './api.impl';
const requestClient = new TaroHttpClient();

export class eduApi {
  private eduClient: ApiImpl;
  constructor(httpClient: ApiImpl) {
    this.eduClient = httpClient;
  }

  public async loginStudent(username: string, password: string) {
    return await this.eduClient.restPost('/auth/login/student', {
      username,
      password,
    });
  }
}

let eduApiInstance: eduApi | null = null;
export function getEduApi(): eduApi {
  if (!eduApiInstance) {
    eduApiInstance = new eduApi(requestClient);
  }
  return eduApiInstance;
}
