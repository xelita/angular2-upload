import {Component, OnInit} from '@angular/core';
import {State} from "../../core/model/state.model";

@Component({
    selector: 'app-pending-orders',
    templateUrl: './pending-orders.component.html',
    styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

    state:State;

    constructor() {
    }

    ngOnInit() {
        this.state = new State();
    }

    startUpload(){
        this.state.uploadInProgress = true;
    }

    stopUpload(){
        this.state.uploadInProgress = false;
    }
}
