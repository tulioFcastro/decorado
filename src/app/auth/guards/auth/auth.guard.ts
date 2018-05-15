import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, EventEmitterService } from '../../../services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      EventEmitterService.get('userNotLogged').emit('userNotLogged');
      return false;
    } else {
      // TODO method to check if userToken is valid
      EventEmitterService.get('userLogged').emit('userLogged');
      return true;
    }
  }

}
