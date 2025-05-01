import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Employee Management</h1>
    <app-employee-form (employeeAdded)="onEmployeeAdded()"></app-employee-form>
    <app-employee-list [refresh]="refreshList"></app-employee-list>
  `,
})
export class AppComponent {
  refreshList = false;

  onEmployeeAdded() {
    this.refreshList = !this.refreshList;
  }
}