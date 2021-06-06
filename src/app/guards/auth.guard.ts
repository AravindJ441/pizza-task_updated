import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';





@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor( private router: Router) {

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let pizzaboyPreseent = localStorage.getItem('pizza-boy');
        if(pizzaboyPreseent &&  Object.keys(JSON.parse(pizzaboyPreseent)).length) {

            return true
        } 
       this.router.navigate(['app-management','authenticate'])
       return false
    }

 

}