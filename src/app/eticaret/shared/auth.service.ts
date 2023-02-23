import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
    IsLoggedIn(){
      return !!localStorage.getItem("user");
    }
    adminAuth(){
      if (localStorage.getItem("userType")=="admin"){
          return true;
      }
      return false;
    }
    userAuth(){
        if (localStorage.getItem("userType")=="user"){
            return true;
        }
        return false;
    }
}
