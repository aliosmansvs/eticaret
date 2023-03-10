import { NgModule } from '@angular/core';
import {AsyncPipe, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {LoginModule} from "./eticaret/login/login.module";
import {UserpageModule} from "./eticaret/homepage/userpage.module";
import {AdminpageModule} from "./eticaret/dashboard/adminpage.module";
import {ProductService} from "./eticaret/service/product.service";
import {ConfirmationService} from "primeng/api";
import {BasketModule} from "./eticaret/basket/basket.module";

import {StoreModule} from "@ngrx/store";
import {shopReducer} from "./eticaret/store/shop/shop.reducers";
import {SHOP_REDUCER} from "./eticaret/model/shop";
import {AuthService} from "./eticaret/shared/auth.service";
import {BasketService} from "./eticaret/service/basket.service";
import {LoginService} from "./eticaret/service/login.service";



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        UserpageModule,
        AdminpageModule,
        BasketModule,
        StoreModule.forRoot({[SHOP_REDUCER]:shopReducer}),

        AsyncPipe

    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,ConfirmationService,AuthService,BasketService,LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
