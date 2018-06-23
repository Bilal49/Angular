import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-of-employee',
  templateUrl: './list-of-employee.component.html',
  styleUrls: ['./list-of-employee.component.css']
})
export class ListOfEmployeeComponent implements OnInit {

  employees:Employee[] = [
    
    {
      name:"Bilal",
      empno :"19476",
      gender:"Male",
      dateofbirth: new Date()  
  
  },

  {
    name:"Asim",
    empno :"12454",
    gender:"Male",
    dateofbirth: new Date()  

},
{
  name:"Usman",
  empno :"47554",
  gender:"Male",
  dateofbirth: new Date()  

}
];

  constructor() { }

  ngOnInit() {
  }

}
