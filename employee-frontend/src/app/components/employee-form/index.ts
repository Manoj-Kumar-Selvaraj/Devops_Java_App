import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  template: `
    <h3>Add Employee</h3>
    <input [(ngModel)]="name" placeholder="Name" />
    <input [(ngModel)]="role" placeholder="Role" />
    <button (click)="addEmployee()">Add</button>
  `
})
export class EmployeeFormComponent {
  name = '';
  role = '';

  @Output() employeeAdded = new EventEmitter<void>();

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    if (this.name && this.role) {
      this.employeeService.createEmployee({ name: this.name, role: this.role }).subscribe(() => {
        this.name = '';
        this.role = '';
        this.employeeAdded.emit();
      });
    }
  }
}