import { Component, OnInit } from '@angular/core';
import { AuthService, EventEmitterService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isAuth = false;
  userLogin;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.checkIfIsAuthenticated();
    EventEmitterService.get('userLogged').subscribe(() => {
      this.isAuth = true;
      this.getUserLogged();
    });
    EventEmitterService.get('userNotLogged').subscribe(() => {
      this.isAuth = false;
      this.userLogin = null;
    });
  }

  checkIfIsAuthenticated() {
    this.isAuth = this.authService.isAuthenticated();
  }

  getUserLogged() {
    this.userLogin = this.authService.getUserLogged('name');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login']);
    this.isAuth = false;
  }
}
