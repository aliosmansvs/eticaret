import {
    Component, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [MessageService]

})

export class LoginComponent {
    userName!:string
    password!:string
    constructor(private router:Router,private loginService:LoginService) {

    }

    login() {

        this.loginService.findUser(this.userName,this.password).subscribe(data=>console.log(data));





    }


}




