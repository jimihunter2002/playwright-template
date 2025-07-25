import { APIRequestContext, expect } from 'playwright/test';

export class UserApi {
  constructor(private request: APIRequestContext) {}

  async getUserById(userId: string) {
    const response = await this.request.get(`/api/users/${userId}`);
    expect(response.ok()).toBeTruthy();
    return response.json();
  }

  async createUser(data: Record<string, any>) {
    const response = await this.request.post('/api/users', {
      data,
    });
    expect(response.ok()).toBeTruthy();
    return response.json();
  }
}
