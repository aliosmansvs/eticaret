import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: [
                    { path: 'login', loadChildren: () => import('./eticaret/login/login.module').then(m => m.LoginModule) },
                    { path: 'homepage', loadChildren: () => import('./eticaret/homepage/homepage.module').then(m => m.HomepageModule) },
                    { path: 'dashboard', loadChildren: () => import('./eticaret/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'shoppage', loadChildren: () => import('./eticaret/shop/shoppage.module').then(m => m.ShoppageModule) },
                ]
            },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
