import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from "primeng/api";
import {Product} from "../model/product";
import {NodeService} from "../../demo/service/node.service";





@Component({
    selector: 'app-productpage',
    templateUrl: './productpage.component.html'

})

export class ProductpageComponent   {

    product!: Product;
    files!: TreeNode[];

    cols!: any[];


    productDialog: boolean;
    products: Product[]=[];
    constructor(private nodeService: NodeService) {
        this.productDialog=true;

        // @ts-ignore
        this.product=JSON.parse(localStorage.getItem("Product"));
        console.log(this.product);
        this.products.push(this.product);
    }


    ngOnInit() {
        this.nodeService.getFilesystem().then(files => {
            return this.files = files;
        });

        this.cols = [
            { field: 'name', header: 'Name' }
        ];
    }

    shop() {

    }

    hideDialog() {
        this.productDialog=false;
    }

    addShop() {

    }
}
