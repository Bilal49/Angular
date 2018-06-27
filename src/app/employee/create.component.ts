import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  gender:string = "female";
  
  constructor() { }

  ngOnInit() {
  }

  saveemployee(empForm:NgForm): void{

    console.log(empForm);

  }

}
