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
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.checkIfIsAuthenticated();
    EventEmitterService.get('userLogged').subscribe(() => this.isAuth = true);
    EventEmitterService.get('userNotLogged').subscribe(() => this.isAuth = false);
  }

  checkIfIsAuthenticated() {
    this.isAuth = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login']);
    this.isAuth = false;
  }
}
