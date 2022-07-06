import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { Employees } from '../employees.component';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrls: ['./detail-employees.component.scss'],
})
export class DetailEmployeesComponent implements OnInit {
  @Input() id: number;
  public employee: Employees;
  public isLoading: boolean;

  constructor(private http: HttpClient, public modal: NgbActiveModal) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.http
      .get<Employees>(
        `https://62c3e2c9abea8c085a65724b.mockapi.io/api/v1/employees/${this.id}`
      )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.employee = data;
        console.log(data);
      });
  }
}
