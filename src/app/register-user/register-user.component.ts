import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public registrationForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.email])]
      // name: ['', Validators.required]
    });
  }
  //FUNCTION TO GET FORM FIELDS VALUES...
  get formField() {
    return this.registrationForm.controls;
  }

  register() {
    this.submitted = true;
    //STOP USER IF LOGIN FORM IS INVALID...
    if (this.registrationForm.invalid) {
      return;
    }

    this.commonService.register(this.formField.userName.value).subscribe(data => {
      console.log(data);
      this.registrationForm.reset();
    });
  }
}
