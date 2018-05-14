import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  static AUTH_TOKEN = 'authToken';

  constructor() {}

  static isAuthenticated() {
    return !!localStorage.getItem(this.AUTH_TOKEN);
  }

  static logout() {
    localStorage.removeItem(this.AUTH_TOKEN);
  }

  static storeToken(token) {
    localStorage.setItem(this.AUTH_TOKEN, token);
  }
}
