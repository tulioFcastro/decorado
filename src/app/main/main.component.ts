import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../shared/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class MainComponent implements OnInit {

  sidebarClose = false;

  constructor() { }

  ngOnInit() {
  }

  closeSidebar(isOpen) {
    this.sidebarClose = isOpen;
  }
}
