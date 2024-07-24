import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employestable',
  templateUrl: './employestable.component.html',
  styleUrls: ['./employestable.component.css']
})
export class EmployestableComponent {

  

  public employes : any =[
 
  

    {name: 'adnan', age: 24, dob: new Date('06/10/2000'), experience: 2, package: 8},
    {name: 'zeeshan', age: 25, dob: new Date('07/11/1999'), experience: 4, package: 9},
    {name: 'talha', age: 26, dob: new Date('2/10/1998'), experience: 5, package: 14},
    {name: 'owais', age: 27, dob: new Date('06/10/1996'), experience: 8, package: 20}

  ]

  
}
