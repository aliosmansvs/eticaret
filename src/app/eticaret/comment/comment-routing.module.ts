import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentComponent} from './comment.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CommentComponent }
    ])],
    exports: [RouterModule]
})
export class CommentRoutingModule { }
