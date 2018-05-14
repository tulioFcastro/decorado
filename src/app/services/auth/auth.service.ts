import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import { User } from '../../User';

@Injectable()
export class AuthService {

  AUTH_TOKEN = 'authToken';

  constructor(private generalService: GeneralService) {}

  isAuthenticated() {
    return !!localStorage.getItem(this.AUTH_TOKEN);
  }

  logout() {
    localStorage.removeItem(this.AUTH_TOKEN);
  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.generalService.getUsers().subscribe(
        (users) => {
          for (let user in users) {
            let tempUser = users[user];
            if (tempUser['login'] === data['login'] && tempUser['password'] === data['password']) {
              this.storeToken(this.encode(JSON.stringify(tempUser)));
              resolve('User authenticated');
            }
          }
          reject('Unauthenticated user');
        },
        (error) => {
          reject('Error in authentication');
        });
    });
  }

  encode (object) {
    return btoa(object);
  }

  decode (object) {
    return atob(object);
  }
  storeToken(token) {
    localStorage.setItem(this.AUTH_TOKEN, token);
  }
}
