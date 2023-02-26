import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent,
                children: [
                    { path: '', loadChildren: () => import('./eticaret/login/login.module').then(m => m.LoginModule) },
                    { path: 'userpage',loadChildren: () => import('./eticaret/homepage/userpage.module').then(m => m.UserpageModule) },
                    { path: 'adminpage' ,loadChildren: () => import('./eticaret/dashboard/adminpage.module').then(m => m.AdminpageModule) },
                    { path: 'basket', loadChildren: () => import('./eticaret/basket/basket.module').then(m => m.BasketModule) },
                    { path: 'shoppage', loadChildren: () => import('./eticaret/shoppage/shoppage.module').then(m => m.ShoppageModule) },
                    { path: 'comment', loadChildren: () => import('./eticaret/comment/comment.module').then(m => m.CommentModule) }
                ]
            },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
