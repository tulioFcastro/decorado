import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services';
import { slideToRight } from '../shared';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class MainComponent implements OnInit {

  sidebarClose = false;
  isAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkIfIsAuthenticated();
  }

  checkIfIsAuthenticated() {
    this.isAuth = this.authService.isAuthenticated();
  }

  closeSidebar(isOpen) {
    this.sidebarClose = isOpen;
  }
}
