import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `<div *ngIf="refresh">Employee List Component Loaded</div>`
})
export class EmployeeListComponent {
  @Input() refresh: boolean = false;
}
