import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentComponent} from './comment.component';
import {CommonModule} from "@angular/common";
import {CommentRoutingModule} from "./comment-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";
import {PaginatorModule} from "primeng/paginator";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {CheckboxModule} from "primeng/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations:[CommentComponent],
    imports: [
        CommonModule,
        CommentRoutingModule,
        FormsModule,
        ButtonModule,
        ChipsModule,
        MultiSelectModule,
        TableModule,
        DropdownModule,
        FileUploadModule,
        SliderModule,
        DividerModule,
        ToastModule,
        ToolbarModule,
        RippleModule,
        InputTextareaModule,
        RadioButtonModule,
        PaginatorModule,
        ConfirmDialogModule,
        DialogModule,
        CheckboxModule,
        MatCardModule,
        MatButtonModule,
    ]
})
export class CommentModule { }
