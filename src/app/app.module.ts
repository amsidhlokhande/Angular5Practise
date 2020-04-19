import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routeComponent} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
