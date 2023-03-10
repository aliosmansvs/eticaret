import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './login.component';
import {CommonModule} from "@angular/common";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";

@NgModule({
    declarations:[LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ButtonModule,
        ChipsModule,
        MultiSelectModule,
        TableModule,
        DropdownModule,
        FileUploadModule,
        SliderModule,
        DividerModule,
    ]
})
export class LoginModule { }
