import {
    Component, OnChanges,
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
    selector: 'app-login',
    templateUrl: './shoppage.component.html',
    providers: [MessageService]

})

export class ShoppageComponent implements OnInit{
    productDialog!: boolean;

    products: Product[]=[];

    product!: Product;

    selectedProducts!: Basket[];

    submitted!: boolean;

    statuses!: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }];
    disabled!: boolean;

    totalPrice:number=0;
     amountCount!: Observable<number>;

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService,
                private store:Store , private basketService:BasketService) {

        this.amountCount = store.select(selectCurrentShop);

        this.basketService.findAllById(1).subscribe((response:Product[]) =>  this.products=response);




        // this.products.forEach(value => {
        //     console.log(value)
        //     this.totalPrice+=value.price*value.amount;
        // })


    }
    ngOnInit() {

        this.products.forEach(value => {
            this.totalPrice+=value.price*value.amount;
        })

        this.amountCount=this.store.select(selectCurrentShop);

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    deleteProduct(product: Product) {
        console.log(product);
        this.confirmationService.confirm({
            message: 'Silmek istediğinize emin misiniz ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.basketService.deleteProduct(product.id);
                for (let i = 0; i <product.amount ; i++) {
                    console.log(i)
                    this.store.dispatch(shopDecrement());
                }
                this.product = {} as Product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });

    }


    addShop() {
        console.log(this.selectedProducts);
        this.selectedProducts.forEach((value)=>{
            console.log("value",value);
            this.basketService.saveBasket(value);
        })
    }
}




