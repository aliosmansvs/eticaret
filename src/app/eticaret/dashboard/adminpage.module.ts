import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminpageComponent} from './adminpage.component';
import {CommonModule} from "@angular/common";
import {AdminpageRoutingModule} from "./adminpage-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {PaginatorModule} from "primeng/paginator";
import {RatingModule} from "primeng/rating";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
    declarations:[AdminpageComponent],
    imports: [
        CommonModule,
        AdminpageRoutingModule,
        FormsModule,
        ButtonModule,
        ChipsModule,
        MultiSelectModule,
        TableModule,
        DropdownModule,
        FileUploadModule,
        SliderModule,
        DividerModule,
        TabMenuModule,
        CardModule,
        PaginatorModule,
        RatingModule,
        ToastModule,
        ToolbarModule,
        RippleModule,
        DialogModule,
        RadioButtonModule,
        InputTextareaModule,
        ConfirmDialogModule,
    ]
})
export class AdminpageModule { }
