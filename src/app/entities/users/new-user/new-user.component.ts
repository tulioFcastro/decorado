import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../../../services';
import { User } from '../../../User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  @Output() createdUserEmmiter = new EventEmitter();
  @Input() modalRef: BsModalRef;
  form: FormGroup;
  submitError: false;
  hide = true;
  profiles = [
    {value: 'ADMIN', viewValue: 'Administrador'},
    {value: 'USER', viewValue: 'Usuário'}
  ];
  profileSelected = this.profiles[1]['value'];

  constructor(private fb: FormBuilder,
              private generalService: GeneralService) {
    this.form = fb.group({
      'userLogin': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      'name': [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }
  saveUser() {
    const user = new User();
    user.login = this.form.controls['userLogin'].value;
    user.password = this.form.controls['password'].value;
    user.name = this.form.controls['name'].value;
    user.profile = this.profileSelected;

    this.generalService.save(user).subscribe(
      (data) => {
        this.modalRef.hide();
        this.createdUserEmmiter.emit('createdUser');
      }, (err) => {
        console.log(err);
      }
    )
  }
}
