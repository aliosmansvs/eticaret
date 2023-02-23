import {
    Component, DoCheck, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MessageService} from "primeng/api";
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
    templateUrl: './homepage.component.html',
    providers: [MessageService]

})

export class HomepageComponent implements OnInit {
    productDialog!: boolean;

    products!: Product[];


    shopProducts: Product[] = [];

    product!: Product;
    test!:number;

    selectedProducts!: Product[];

    submitted!: boolean;

    statuses!: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }];
    disabled!: boolean;
    productAmount: number = 0;

    amountCount!: Observable<number>;

    constructor(private productService: ProductService, private messageService: MessageService,
                private confirmationService: ConfirmationService, private router: Router,
                private store: Store,private basketServis:BasketService)
    {
        this.productService.GetAll().subscribe(value => this.products=value);


    }
    ngOnInit() {
        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];

        this.amountCount=this.store.select(selectCurrentShop);
        this.amountCount.subscribe(value => this.test=value);

    }
    addProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }
    routerShopping() {
        this.router.navigate(["shoppage"]);

    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
        this.disabled = false;
    }

    shopLocalStorage(product:Product) {
        console.log("1",product)
        this.basketServis.saveProduct(product);


        this.submitted = true;


        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Added to Shop',
            life: 3000
        });

        if (this.shopProducts.length != null) {
            if(this.shopControl()){
                this.shopProducts.push(this.product);
            }
        } else {
            this.shopProducts.push(this.product)
        }


        this.productDialog = false;
        localStorage.setItem("products", JSON.stringify(this.shopProducts));
        this.product = {} as Product;

        this.store.dispatch(shopIncrement());

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




