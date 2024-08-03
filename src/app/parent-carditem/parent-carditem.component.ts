import { Component } from '@angular/core';
import { ParentCarditemService } from './parent-carditem.service';

@Component({
  selector: 'app-parent-carditem',
  templateUrl: './parent-carditem.component.html',
  styleUrls: ['./parent-carditem.component.css']
})
export class ParentCarditemComponent {
public count : number = 0;

constructor(private _parentcardService:ParentCarditemService){
  // this._parentcardService.getcount().subscribe(
  //   (data:any)=>{
  //     this.count = data;
  //   }
  // )
}
}
