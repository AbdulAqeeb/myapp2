import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent {

  public count:number = 0;

  constructor(private _commonService:CommonService) { }

  countchange(){
    this._commonService.setcount(this.count);
  }
}
