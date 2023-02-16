import {
    Component, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {MessageService} from "primeng/api";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [MessageService]

})

export class LoginComponent {
    userName!:string
    password!:string
    constructor(private router:Router) {
        localStorage.setItem("user","user");
        localStorage.setItem("userPassword","12345");

        localStorage.setItem("admin","admin");
        localStorage.setItem("adminPassword","12345");
    }

    login() {
        console.log('asdas')


        if(localStorage.getItem("admin")==this.userName && localStorage.getItem("adminPassword")==this.password){
            this.router.navigate(["dashboard"]);
        }else if(localStorage.getItem("user")==this.userName && localStorage.getItem("userPassword")==this.password){
            this.router.navigate(["homepage"]);
        }else {
            alert("Worg user name or Password");
        }



    }


}




