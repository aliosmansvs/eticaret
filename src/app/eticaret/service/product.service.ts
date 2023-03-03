import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {niceNum} from "chart.js/helpers";

@Injectable(

)
export class ProductService {
    private apiurl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }


    GetAll():Observable<Product[]> {
        console.log(`${this.apiurl}/product/getAll`);
        return this.httpClient.get<Product[]>(`${this.apiurl}product/getAll`);
    }
    Saves(product:Product) {
        console.log(`${this.apiurl}product/save`);
        console.log(product)
        this.httpClient.post<any>(`${this.apiurl}product/save`, product).subscribe(data => {
            console.log(data)
        });
    }
    Deletes(id:number){
        console.log(id);
        this.httpClient.delete<any>(`${this.apiurl}product/delete/`+id).subscribe(data => {
            console.log(data)
        });
    }
    getProductDetailById(id:number):Observable<Product>  {
        return this.httpClient.get<Product>(`${this.apiurl}product/find/${id}`);
    }

}
