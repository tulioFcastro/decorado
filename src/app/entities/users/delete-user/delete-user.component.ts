import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from '../../../services';
import { User } from '../../../User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  @Input() modalRef: BsModalRef;
  @Input() user: User;
  @Output() deletedUserEmmiter = new EventEmitter();
  form: FormGroup;
  error;

  constructor(private fb: FormBuilder,
              private generalService: GeneralService) {
    this.form = fb.group({});
  }

  ngOnInit() {
  }

  deleteUser() {
    this.generalService.delete(this.user).subscribe(
      (data) => {
        this.modalRef.hide();
        this.deletedUserEmmiter.emit('deletedUser');

        this.modalRef.hide();
      }, (err) => {
        console.log(err);
        this.error = true;
      }
    );
  }
}
