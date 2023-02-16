import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/product-stock.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
