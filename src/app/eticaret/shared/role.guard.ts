import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    canActivate() {
        let role = localStorage.getItem("userType");

        if (role=="user" ){
            return true;
        }
        else {
            alert("Tekrar Deneyiniz");
            return false;
        }

    }


}
