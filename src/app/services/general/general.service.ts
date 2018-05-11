import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  constructor() { }
  static getUserToken() {
    return localStorage.getItem('userToken');
  }

  static logout() {
    localStorage.removeItem('userToken');
  }

  static storeToken(token) {
    localStorage.setItem('userToken', token);
  }

  static setSystemLanguage(language) {
    localStorage.setItem('language', language);
  }

  static getSystemLanguage() {
    return localStorage.getItem('language');
  }
}
