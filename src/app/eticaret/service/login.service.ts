import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {identity, Observable} from "rxjs";
import {Product} from "../model/product";
import {Injectable} from "@angular/core";
import {Basket} from "../model/basket";
@Injectable()

export class LoginService{
    private apiUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }



    findUser(userName:String,userPassword:String):Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}user/login/`+userName+userPassword);
        console.log()
    }


}
