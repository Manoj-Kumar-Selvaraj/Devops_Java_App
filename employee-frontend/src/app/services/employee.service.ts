import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.baseUrl);
  }

  createEmployee(employee: { name: string; role: string }) {
    return this.http.post(this.baseUrl, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}