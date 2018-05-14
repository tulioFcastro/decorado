import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginError = false;
  hide = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.form = fb.group({
      'userLogin': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });
  }

  ngOnInit() {

  }

  login() {
    console.log('login');
    console.log(this.form.controls['userLogin'].value, this.form.controls['password'].value);

    this.authService.login({
        login: this.form.controls['userLogin'].value,
        password: this.form.controls['password'].value
      });
  }
}
