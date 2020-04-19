import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'employeeDetails', component: EmployeeDetailsComponent},
  {path: 'employeeList', component: EmployeeListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routeComponent = [ EmployeeDetailsComponent, EmployeeListComponent ];
