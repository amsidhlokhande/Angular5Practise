import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeGetUrl = 'assets/employee-data/employees.json';
  constructor(private httpClient: HttpClient) {
  }
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employeeGetUrl);
  }
}
