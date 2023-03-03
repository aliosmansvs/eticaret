import {Product} from "./product";
import {User} from "./user";

export interface Comment{
   id:number
    product:string
    user:string
    parentId:number|null
    textYorum :string

}
