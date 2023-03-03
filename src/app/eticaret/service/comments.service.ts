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
        return this.httpClient.get<Comment[]>(`${this.apiurl}comment/getAll`);
    }

    saves(comment:Comment) {
        console.log(`${this.apiurl}comment/save`);
        console.log(comment)
        this.httpClient.post<any>(`${this.apiurl}comment/save`, comment).subscribe(data => {
            console.log(data)
        });
    }

    deleteComment(id:number){
        console.log(id);
        this.httpClient.delete<any>(`${this.apiurl}comment/delete/`+id).subscribe(data => {
            console.log(data)
        });
    }

}
