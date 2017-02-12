import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicStocksComponent} from './basic-stocks/basic-stocks.component';
import {PendingOrdersComponent} from './pending-orders/pending-orders.component';
import {UploadComponent} from './upload/upload.component';
import {UploadRoutingModule} from "./upload-routing.module";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "ng2-file-upload";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UploadRoutingModule,
        FileUploadModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        UploadComponent,
        BasicStocksComponent,
        PendingOrdersComponent
    ],
    exports: [
        UploadComponent
    ]
})
export class UploadModule {
}
