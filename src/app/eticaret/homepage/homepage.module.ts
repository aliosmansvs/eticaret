import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent} from './homepage.component';
import {CommonModule} from "@angular/common";
import {HomepageRoutingModule} from "./homepage-routing.module";
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
import {ProductService} from "../service/product.service";

@NgModule({
    declarations:[HomepageComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
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
        DialogModule
    ],

})
export class HomepageModule { }
