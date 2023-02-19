import { NgModule } from '@angular/core';
import {AsyncPipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
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
import {HomepageModule} from "./eticaret/homepage/homepage.module";
import {DashboardModule} from "./eticaret/dashboard/dashboard.module";
import {ProductService} from "./eticaret/service/product.service";
import {ConfirmationService} from "primeng/api";
import {ShoppageModule} from "./eticaret/shop/shoppage.module";

import {StoreModule} from "@ngrx/store";
import {shopReducer} from "./eticaret/store/shop/shop.reducers";
import {AuthGuard} from "./eticaret/shared/auth.guard";
import {RoleGuard} from "./eticaret/shared/role.guard";
import {SHOP_REDUCER} from "./eticaret/model/shop";



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginModule,
        HomepageModule,
        DashboardModule,
        ShoppageModule,
        StoreModule.forRoot({[SHOP_REDUCER]:shopReducer}),

        AsyncPipe

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,ConfirmationService,AuthGuard,RoleGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
