import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailEmployeesComponent } from './detail-employees/detail-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'detail-employee/:id',
    component: DetailEmployeesComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeesComponent,
  },
];

@NgModule({
  declarations: [
    EmployeesComponent,
    DetailEmployeesComponent,
    AddEmployeesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    NgSelectModule,
  ],
})
export class EmployeesModule {}
