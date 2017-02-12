import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {UploadService} from "../../core/services/upload.service";

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'app-basic-stocks',
    templateUrl: './basic-stocks.component.html',
    styleUrls: ['./basic-stocks.component.css']
})
export class BasicStocksComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    constructor(
        private uploadService: UploadService,
    ) {
    }

    ngOnInit() {
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
}
