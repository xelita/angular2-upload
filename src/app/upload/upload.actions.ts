import {Injectable} from "@angular/core";
import {Action} from "redux";

@Injectable()
export class UploadActions {

    static START_UPLOAD = 'START_UPLOAD';
    static STOP_UPLOAD = 'STOP_UPLOAD';

    startUpload(): Action {
        return {type: UploadActions.START_UPLOAD};
    }

    stopUpload(): Action {
        return {type: UploadActions.STOP_UPLOAD};
    }
}
