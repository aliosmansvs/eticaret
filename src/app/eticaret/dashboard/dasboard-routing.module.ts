import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DasboardComponent} from './dasboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DasboardComponent }
    ])],
    exports: [RouterModule]
})
export class DasboardRoutingModule { }
