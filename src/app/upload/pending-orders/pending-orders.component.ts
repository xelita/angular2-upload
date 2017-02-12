import {Component, OnInit} from '@angular/core';
import {AppState} from "../../app.store";
import {NgRedux, select} from "@angular-redux/store";
import {UploadActions} from "../upload.actions";
import {Observable} from "rxjs";

@Component({
    selector: 'app-pending-orders',
    templateUrl: './pending-orders.component.html',
    styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

    @select() uploadInProgress$: Observable<boolean>;

    constructor(private ngRedux: NgRedux<AppState>,
                public actions: UploadActions) {
    }

    ngOnInit() {
    }

    startUpload() {
        this.ngRedux.dispatch(this.actions.startUpload());
    }

    stopUpload() {
        this.ngRedux.dispatch(this.actions.stopUpload());
    }
}
