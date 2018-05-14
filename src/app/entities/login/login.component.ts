import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { slideToRight } from '../../shared/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginError = false;
  hide = true;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.form = fb.group({
      'userLogin': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.clearForm();
  }

  clearForm() {
    this.form.controls['userLogin'].setValue('');
    this.form.controls['password'].setValue('');
  }

  login() {
    this.authService.login({
        login: this.form.controls['userLogin'].value,
        password: this.form.controls['password'].value
      }).then(
        (data) => {
          console.log(data);
          this.clearForm();
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
          this.clearForm();
          this.loginError = true;
      });
  }
}
