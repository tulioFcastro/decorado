import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services';
import { slideToRight } from '../../shared/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
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
