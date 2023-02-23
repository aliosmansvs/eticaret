import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {identity, Observable} from "rxjs";
import {Product} from "../model/product";
import {Injectable} from "@angular/core";
import {Basket} from "../model/basket";
@Injectable()

export class BasketService{
    private apiUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }



    findAllById(id:number):Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}basket/findAllById`);
        console.log()
    }

    saveProduct(product:Product) {
        console.log(`${this.apiUrl}basket/save`);
        console.log(product)
        this.httpClient.post<any>(`${this.apiUrl}basket/save`, product).subscribe(data => {
            console.log(data)
        });
    }
    deleteProduct(id:number){
        console.log(id);
        this.httpClient.delete<any>(`${this.apiUrl}basket/delete/`+id).subscribe(data => {
            console.log(data)
        });
    }

    saveBasket(basket:Basket) {
        console.log(`${this.apiUrl}basket/save`);
        console.log(basket)
        this.httpClient.post<any>(`${this.apiUrl}shop/add`, basket).subscribe(data => {
            console.log(data)
        });
    }
}
