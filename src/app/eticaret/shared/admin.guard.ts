import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private auth:AuthService,private router:Router) {
    }
  canActivate(){
     if (this.auth.adminAuth()){
         return true;
     }
      this.router.navigate(['dashboard']);
     return false;
  }

}
