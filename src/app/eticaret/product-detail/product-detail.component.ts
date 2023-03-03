import {Component, OnInit} from '@angular/core';
import {BasketService} from "../service/basket.service";
import {ProductService} from "../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../demo/api/product";


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    comments: Comment[]=[];
    commentsTwo : Comment[]=[];
    commentss:any[]=[];

    constructor(
        private productService: ProductService,
        private basketService: BasketService,
        private route: ActivatedRoute
    ) {
    }

    submitted!: boolean;
    product!: Product;
    id: number = 0;
    productAmount: number = 0;

    ngOnInit() {
        this.route.params.subscribe(params => this.getProductById(params['id']))
        this.listDBTest();
    }

    getProductById(id: number) {
        // console.log("1",id)
        this.productService.getProductDetailById(id).subscribe((data: any) => this.product = data);
    }

    addToCard(product: Product) {

        this.submitted = true;


    }
    listTest(){


        let list=this.comments;
        let  recursivefunc = (list:any[], id = 0) => {
            let array: any[] = [];
            list.forEach((element: {
                parent_id: number;
                id: number | undefined;
                children: any[];
            }) => {
                if (element.parent_id === id) {
                    let children = recursivefunc(list, element.id);

                    if (children.length) {
                        element.children = children;
                    } else {
                        element.children = [];
                    }
                    array.push(element);
                }
            })
            return array;
        }
        this.commentss=recursivefunc(list);
    }
    listDBTest(){



        let list=this.commentsTwo;

        let  recursivefunc2 = (list:any[], id = 0) => {
            let array: any[] = [];
            list.forEach((element:any) => {
                console.log("value pid",element.parentID,"id",element.id);
                console.log("type pid",typeof element.parentID,"type id", typeof element.id);

                if (element.parentID === id) {
                    let children = recursivefunc2(list, element.id);

                    if (children.length) {
                        element.children = children;
                    } else {
                        element.children = [];
                    }
                    array.push(element);
                }
            })
            return array;
        }
        this.commentss=recursivefunc2(list);

        console.log("dblist",this.commentss);



    }


}
