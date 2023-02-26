import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppageComponent} from './shoppage.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ShoppageComponent }
    ])],
    exports: [RouterModule]
})
export class ShoppageRoutingModule { }
