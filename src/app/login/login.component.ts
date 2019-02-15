import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  // , private alertService: AlertService
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    //reset login status...
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //FUNCTION TO GET FORM FIELDS VALUES...
  get formField() {
    return this.loginForm.controls;
  }

  /**
   * FUNCTION FOR LOGIN USER...
   */
  onSubmit() {
    this.submitted = true;

    //STOP USER IF LOGIN FORM IS INVALID...
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.formField.userName.value, this.formField.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.token) {
            this.authenticationService._showNavBar.next(true);
            this.router.navigate(['dashboard']);
          }
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }
}
