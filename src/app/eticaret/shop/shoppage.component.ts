import {
    Component, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MessageService} from "primeng/api";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";


@Component({
    selector: 'app-login',
    templateUrl: './shoppage.component.html',
    providers: [MessageService]

})

export class ShoppageComponent implements OnInit{
    productDialog!: boolean;

    products!: Product[];

    product!: Product;

    selectedProducts!: Product[];

    submitted!: boolean;

    statuses!: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }];
    disabled!: boolean;

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    openNew() {
        this.product = {} as Product;
        this.submitted = false;
        this.productDialog = true;
    }



    addProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Silmek istediğinize emin misiniz ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {} as Product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {} as Product;
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): number {
        let id;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        id= Math.random();
        return id;
    }

}




