import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../User';
import { GeneralService } from '../../../services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() modalRef: BsModalRef;
  @Input() user: User;
  @Output() editedUserEmmiter = new EventEmitter();
  form: FormGroup;
  submitError;
  profiles;

  profileSelected;

  constructor(private fb: FormBuilder,
              private generalService: GeneralService) {
    this.form = fb.group({
      'userLogin': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      'name': [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.fillUser();
    this.profiles = this.generalService.getProfiles();
  }

  fillUser() {
    this.form.controls['userLogin'].setValue(this.user.login);
    this.form.controls['password'].setValue(this.user.password);
    this.form.controls['name'].setValue(this.user.name);
    this.profileSelected = this.user['profile'];
  }

  saveUser() {
    const user = new User();
    user.login = this.form.controls['userLogin'].value;
    user.password = this.form.controls['password'].value;
    user.name = this.form.controls['name'].value;
    user.profile = this.profileSelected;
    user.id = this.user.id;

    this.generalService.save(user).subscribe(
      () => {
        this.modalRef.hide();
        this.editedUserEmmiter.emit('createdUser');
      }, (err) => {
        console.log(err);
        this.submitError = true;
      }
    );
  }

}
