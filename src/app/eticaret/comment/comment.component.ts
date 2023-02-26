import {
    Component, Input, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MessageService} from "primeng/api";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCurrentShop} from "../store/shop/shop.selectors";
import {shopDecrement, shopIncrement} from "../store/shop/shop.action";
import {BasketService} from "../service/basket.service";
import {Basket} from "../model/basket";


@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    providers: [MessageService]

})

export class CommentComponent{
    @Input() currentUserId!:number


}




