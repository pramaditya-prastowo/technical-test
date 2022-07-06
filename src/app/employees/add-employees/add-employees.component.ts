import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss'],
})
export class AddEmployeesComponent implements OnInit {
  public formGroup: FormGroup = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    userName: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    birthDate: [null, Validators.required],
    basicSalary: [null, Validators.required],
    status: [null, Validators.required],
    group: [null, Validators.required],
    description: [null, Validators.required],
  });

  public today: any;

  public group = [
    { id: 1, text: 'group 1' },
    { id: 2, text: 'group 2' },
    { id: 3, text: 'group 3' },
    { id: 4, text: 'group 4' },
    { id: 5, text: 'group 5' },
    { id: 6, text: 'group 6' },
    { id: 7, text: 'group 7' },
    { id: 8, text: 'group 8' },
    { id: 9, text: 'group 9' },
    { id: 10, text: 'group 10' },
  ];
  constructor(private fb: FormBuilder, public modal: NgbActiveModal) {}

  public isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  public save() {
    const data = this.formGroup.value;
    console.log(data);
  }

  ngOnInit(): void {
    this.today = moment(new Date()).format('YYYY-MM-DD');
  }
}
