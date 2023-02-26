import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductpageComponent} from './productpage.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductpageComponent }
    ])],
    exports: [RouterModule]
})
export class ProductpageRoutingModule { }
