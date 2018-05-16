import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  AUTH_TOKEN = 'authToken';

  constructor(private generalService: GeneralService,
              private router: Router) {}

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

  getUserLogged(attr) {
    try {const resp = JSON.parse(this.decode(localStorage.getItem(this.AUTH_TOKEN)));
      if (attr) {
        return resp[attr];
      } else {
        return resp;
      }
    } catch (e) {
      localStorage.removeItem(this.AUTH_TOKEN);
      this.router.navigate(['/login']);
    }
  }

}
