import {
    Component, DoCheck, EventEmitter, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";



@Component({
    selector: 'app-dashboard',
    templateUrl: './adminpage.component.html',
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]

})

export class AdminpageComponent implements OnInit {
    productDialog!: boolean;

    products: Product[]=[];

    product!: Product;

    selectedProducts: Product[]=[];

    submitted!: boolean;

    // serarchValue:string='';
    // @Output() searchTextChange:EventEmitter<string> = new EventEmitter<string>();
    //
    // onSearchChange($event: Event){
    //     this.searchTextChange.emit(this.serarchValue);
    // }


    statuses!: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }];

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {

        this.productService.GetAll().subscribe(value => this.products=value);
        console.log(this.products);
    }

    ngOnInit() {

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }



    addNew() {
        this.product = {} as Product;
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts(product:Product) {

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productService.Deletes(product.productId);

                this.products = this.products.filter(val => {
                    !this.selectedProducts.includes(val);

                });
                this.selectedProducts = this.products;
                this.selectedProducts = {} as Product[];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Product) {

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productService.Deletes(product.productId);
                this.products = this.products.filter(val => val.productId !== product.productId);
                this.product = {} as Product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct(product:Product) {
        this.submitted = true;
        console.log(product)


        if (this.product.name?.trim()) {
            if (this.product.productId) {
                this.products[this.findIndexById(this.product.productId)] = this.product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {

                this.products.push(this.product);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }
            this.productService.Saves(product);


            this.products = [...this.products];
            this.productDialog = false;
            this.product = {} as Product;
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].productId=== id) {
                index = i;
                break;
            }
        }

        return index;
    }


    // ngDoCheck(): void {
    //     // @ts-ignore
    //     this.products=JSON.parse(localStorage.getItem('product'));
    //     console.log(this.products)
    // }

}






