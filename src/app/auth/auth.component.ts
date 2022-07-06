import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public user = {
    username: 'admin',
    password: 'admin',
  };
  public formGroup: FormGroup = this.fb.group({
    username: [
      null,
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  public match: boolean;
  constructor(private router: Router, private fb: FormBuilder) {}

  public isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  public signIn() {
    const data = this.formGroup.value;

    this.match =
      Object.entries(this.user).toString() === Object.entries(data).toString();

    if (this.match === true) {
      this.match = true;
      this.router.navigateByUrl('home', { replaceUrl: true });
    } else {
      this.match = false;
    }
  }

  ngOnInit(): void {}
}
