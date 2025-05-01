import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  template: `<button (click)="addEmployee()">Add Employee</button>`
})
export class EmployeeFormComponent {
  @Output() employeeAdded = new EventEmitter<void>();

  addEmployee() {
    this.employeeAdded.emit();
  }
}
