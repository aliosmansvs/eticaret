import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppageComponent} from './shoppage.component';
import {CommonModule} from "@angular/common";
import {ShoppageRoutingModule} from "./shoppage-routing.module";
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

@NgModule({
    declarations:[ShoppageComponent],
    imports: [
        CommonModule,
        ShoppageRoutingModule,
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
    ]
})
export class ShoppageModule { }
