import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  submit():void {

  }

  get usernameControl() {
    return this.form.get('username') as FormControl;
  }
  get passwordControl() {
    return this.form.get('password') as FormControl;
  }
  get passwordConfirmControl() {
    return this.form.get('passwordConfirm') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    const hasDigit=new RegExp(".*\\d.*");
    const hasLower=new RegExp(".*[a-z].*");
    const hasUpper=new RegExp(".*[A-Z].*");
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(hasDigit), Validators.pattern(hasLower), Validators.pattern(hasUpper)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8), Validators.pattern(hasDigit), Validators.pattern(hasLower), Validators.pattern(hasUpper)]],
    }, {
      validator: this.ConfirmedValidator('password', 'passwordConfirm')
    });
  }

  private ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors["confirmedValidator"]) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
