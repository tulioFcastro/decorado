import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService, GeneralService } from '../../services';
import { slideToRight } from '../../shared';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class UsersComponent implements OnInit {

  users = [];
  modalRef: BsModalRef;
  selectedUser;

  constructor(private generalService: GeneralService,
              private authService: AuthService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.generalService.getUsers().subscribe(
      (users) => {
        this.users = []
        for (let user in users) {
          let tempUser = users[user];
          tempUser['collapse'] = true;
          this.users.push(tempUser);
        }
      },
      (error) => (console.log(error))
    );
  }

  closeCollapsedDivs(actualUser) {
    this.users
      .filter((user) => user.collapse === false && user.id !== actualUser.id)
      .map((u) => {
        u.collapse = true;
      });
    actualUser.collapse = !actualUser.collapse;
  }

  isAdminUser() {
    return this.authService.getUserLogged('profile') === 'ADMIN';
  }

  openModal(template: TemplateRef<any>, user: User) {
    this.selectedUser = user;
    this.modalRef = this.modalService.show(template);
  }

  searchedUsers(research) {
    console.log(research);
    this.users = null;
    if (research['term']) {

      // this.users = ;
      this.users = []
      for (let user in research['users']) {
        let tempUser = research['users'][user];
        tempUser['collapse'] = true;
        this.users.push(tempUser);
      }
    } else {
      this.fetchUsers();
    }
  }

}
