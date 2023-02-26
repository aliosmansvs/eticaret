import {
    Component, DoCheck, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MessageService, SelectItem} from "primeng/api";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {ShopState} from "../model/shop";
import {createReducer, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { selectCurrentShop} from "../store/shop/shop.selectors";
import {shopDecrement, shopIncrement} from "../store/shop/shop.action";
import {BasketService} from "../service/basket.service";



@Component({
    selector: 'app-login',
    templateUrl: './shoppage.component.html',
    providers: [MessageService]

})

export class ShoppageComponent implements OnInit {
    productDialog!: boolean;

    products!: Product[];


    shopProducts: Product[] = [];

    product!: Product;
    test!:number;



    statuses!: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }];
    disabled!: boolean;

    amountCount!: Observable<number>;
    sortField!: string;
    sortOrder!: number;
    sortOptions!: SelectItem[];
    sortKey: any;

    constructor(private productService: ProductService, private messageService: MessageService,
                private confirmationService: ConfirmationService, private router: Router,
                private store: Store,private basketServis:BasketService)
    {


    }
    ngOnInit() {

        this.productService.GetAll().subscribe(data => this.products = data);
        console.log(this.products)

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.amountCount=this.store.select(selectCurrentShop);
        this.amountCount.subscribe(value => this.test=value);

    }
    onSortChange({event}: { event: any }) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    routerShopping() {
        this.router.navigate(["shoppage"]);

    }




    shopControl(): boolean {

        let status: boolean = true;

        this.shopProducts.forEach(value => {
            if (value.id == this.product.id) {
                value.amount++;
                status = false;
            }
        });

        return status;

    }






}




