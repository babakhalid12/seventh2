import { Component } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
Cities =  [
  {name: 'Pune'},
  {name: 'Mumbai'},
  {name: 'Chennai'},
  {name: 'Delhi'},
  {name: 'Kolkata'}
];




selectedValue:string;


 my=new Date();

}
