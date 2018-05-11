import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (UserService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
