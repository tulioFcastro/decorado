import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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
