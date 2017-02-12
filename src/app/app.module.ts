import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ServicesModule} from "./core/services/services.module";
import {UploadModule} from "./upload/upload.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ServicesModule,
        UploadModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
