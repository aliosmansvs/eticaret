import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductDetailRoutingModule} from "./product-detail-routing.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ShoppageModule} from "../shoppage/shoppage.module";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {CommentModule} from "../comment/comment.module";


@NgModule({
    declarations: [ProductDetailComponent],
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        RouterLink,
        ShoppageModule,
        RouterOutlet,
        InputNumberModule,
        FormsModule,
        CommentModule

    ]
})
export class ProductDetailModule {
}
