import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';

@Injectable()
export class UserService {

  constructor() { }

  static isAuthenticated() {
    return !!GeneralService.getUserToken();
  }

  static logout() {
    GeneralService.logout();
  }

}
