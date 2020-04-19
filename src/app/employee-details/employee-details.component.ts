import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
      <div><h1>Employee Details</h1>
          {{error}}
          <ul *ngFor="let employee of employees">
              <li>
                  {{ employee.employeeId + '  ' + employee.employeeName + '  ' + employee.emailId + '  ' + employee.mobileNumber + '  ' + employee.salary}}
               </li>
          </ul>
      </div>      `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
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
