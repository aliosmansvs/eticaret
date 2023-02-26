import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../model/comment";
import {environment} from "../../../environments/environment";
import {Product} from "../model/product";

@Injectable()
export class CommentsService{
    private apiurl = environment.apiBaseUrl;
    constructor(private httpClient:HttpClient) {}

    getComments():Observable<Comment[]>{
        return this.httpClient.get<Comment[]>(`${this.apiurl}product/getAll`);

    }

}
