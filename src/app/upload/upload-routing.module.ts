import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UploadComponent} from "./upload/upload.component";
import {BasicStocksComponent} from "./basic-stocks/basic-stocks.component";
import {PendingOrdersComponent} from "./pending-orders/pending-orders.component";

const routes = [
    {
        path: 'upload',
        component: UploadComponent,
        children: [
            {path: 'basic-stocks', component: BasicStocksComponent},
            {path: 'pending-orders', component: PendingOrdersComponent},
            {path: '', redirectTo: 'basic-stocks', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadRoutingModule {
}
