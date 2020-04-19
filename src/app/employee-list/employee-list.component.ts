import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <div>
        <h1>Employee Names</h1>
        {{error}}
        <ul *ngFor="let employee of employees">
          <li>  {{employee.employeeName}} </li>
        </ul>
    </div>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public error;
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error => {
      this.error = error.message;
      console.error(this.error);
    });
  }

}
