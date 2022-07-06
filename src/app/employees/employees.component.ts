import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailEmployeesComponent } from './detail-employees/detail-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';

export interface Employees {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  birthDate: string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public employees: Employees[] = [];
  public dataSource: MatTableDataSource<Employees>;
  public displayedColumns: string[] = [
    'aksi',
    'id',
    'firstName',
    'lastName',
    'email',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  public logOut() {
    this.router.navigateByUrl('', { replaceUrl: true });
  }

  public searchKey(event: any) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
    console.log(filter);
  }

  public add() {
    this.modalService.open(AddEmployeesComponent, {
      size: 'md',
    });
  }

  public detail(id: number) {
    const modal = this.modalService.open(DetailEmployeesComponent, {
      size: 'md',
    });
    modal.componentInstance.id = id;
  }

  public initData() {
    this.http
      .get<any>('https://62c3e2c9abea8c085a65724b.mockapi.io/api/v1/employees')
      .subscribe((data) => {
        this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit(): void {
    this.initData();
  }
}
