import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  gender:string = "female";
  isActive:boolean = true;
  department:number=2;
  
  departments : Department[] = [
     
    { id : 1, name : "IT" },
    { id : 2, name : "Payroll" },
    { id : 3, name : "HR" }
  ];

  constructor() { }

  ngOnInit() {
  }

  saveemployee(empForm:NgForm): void{

    console.log(empForm);

  }

}
