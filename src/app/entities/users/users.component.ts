import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.getUsers().subscribe(
      users => (console.log(users)),
      error => (console.log(error))
    );
  }

}
