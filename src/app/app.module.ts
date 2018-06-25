import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfEmployeeComponent } from './employee/list-of-employee.component';
import { CreateComponent } from './employee/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEmployeeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
