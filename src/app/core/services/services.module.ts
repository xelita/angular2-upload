import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "./user.service";
import {UploadService} from "./upload.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [],
    providers: [
        UserService, UploadService
    ]
})
export class ServicesModule {
}
