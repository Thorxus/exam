import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registered: boolean = false;

  Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.PasswordValidator]]
    });
  }

  get name(){
    return this.Form.get('name')
  }
  get email(){
    return this.Form.get('email')
  }
  get lastname(){
    return this.Form.get('lastName')
  }
  get mobile(){
    return this.Form.get('mobile')
  }
  get username(){
    return this.Form.get('username')
  }
  get password(){
    return this.Form.get('password')
  }

  ngOnInit(): void {}

  PasswordValidator(control: any) {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && password.length >= 8;

    return valid ? null : { strongPassword: true };
  }

  onRegister(){
    this.registered = true;
  }

}
