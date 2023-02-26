import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketComponent} from './basket.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BasketComponent }
    ])],
    exports: [RouterModule]
})
export class BasketRoutingModule { }
