import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor (private _router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // return true;  

      //  implement data

    if(sessionStorage.getItem('my-app2-token')){
      return true ; 
    }
    else{
      alert("You Need To Login To Access This Page !!!")

      this._router.navigateByUrl("/login");

      return false;
    }
  }
  
}
