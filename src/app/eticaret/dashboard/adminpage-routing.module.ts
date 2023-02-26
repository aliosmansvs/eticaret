import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminpageComponent} from './adminpage.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AdminpageComponent }
    ])],
    exports: [RouterModule]
})
export class AdminpageRoutingModule { }
