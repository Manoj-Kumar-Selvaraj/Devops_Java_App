import { Component, Input, OnChanges } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>Employee List</h3>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.name }} - {{ emp.role }}
        <button (click)="delete(emp.id)">Delete</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent implements OnChanges {
  @Input() refresh = false;
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnChanges() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  delete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees();
    });
  }
}