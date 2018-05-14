import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  constructor() { }

  static setSystemLanguage(language) {
    localStorage.setItem('language', language);
  }

  static getSystemLanguage() {
    return localStorage.getItem('language');
  }
}
