import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticateService: AuthenticationService) {}

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  public resetPassword() {
    console.log(this.forgotPasswordForm.controls.userName.value);
    this.authenticateService
      .resetPassword(this.forgotPasswordForm.controls.userName.value)
      .pipe(first())
      .subscribe(
        res => {
          if (res.sucess) {
            console.log('Reset password sent sucessfully. Check your mail.');
          } else {
            console.log('Some error occur');
          }
        },
        error => {
          console.error('Error', error);
        }
      );
  }
}
