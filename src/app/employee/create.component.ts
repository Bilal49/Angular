import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDaterangepickerConfig} from 'ngx-bootstrap/datepicker'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  dateOfBirth:Date=new Date(2018,0,31);
  datepickerconfig: Partial<BsDaterangepickerConfig>;
  previewPhoto:boolean=false;

  gender:string = "female";
  isActive:boolean = true;
  department:number=2;
  
  departments : Department[] = [
     
    { id : 1, name : "IT" },
    { id : 2, name : "Payroll" },
    { id : 3, name : "HR" }
  ];

  constructor() { 

    this.datepickerconfig = Object.assign({},
      {
        containerClass:'theme-dark-blue',
        dateInputFormat:'DD/MM/YYYY'
      });

  }

  ngOnInit() {
  }
  
  toggleimage():void{
    this.previewPhoto = !this.previewPhoto;
  }

  saveemployee(empForm:NgForm): void{

    console.log(empForm);

  }

}
