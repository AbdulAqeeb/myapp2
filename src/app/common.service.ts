import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create
public countsub$:BehaviorSubject<number> = new BehaviorSubject(0);

constructor(){ }

// Get

getcount(){
return this.countsub$ 
}

// Set

setcount(value:any){
  this.countsub$.next(value)
}
}
