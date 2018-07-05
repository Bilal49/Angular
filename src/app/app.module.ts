import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfEmployeeComponent } from './employee/list-of-employee.component';
import { CreateComponent } from './employee/create.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from  'ngx-bootstrap/datepicker';

const approute : Routes=[
  {path:'list', component:ListOfEmployeeComponent},
  {path:'create', component:CreateComponent},
  {path:'', redirectTo:'/list', pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployeeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
