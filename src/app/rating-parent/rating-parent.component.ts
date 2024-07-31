import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-parent',
  templateUrl: './rating-parent.component.html',
  styleUrls: ['./rating-parent.component.css']
})
export class RatingParentComponent {
@Input() public rating : any = 0;

constructor() { }
}
