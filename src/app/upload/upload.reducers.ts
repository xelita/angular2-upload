import {AppState} from "../app.store";
import {Action} from "redux";
import {UploadActions} from "./upload.actions";

export function uploadReducer(lastState: AppState, action: Action): AppState {
    switch (action.type) {
        case UploadActions.START_UPLOAD:
            return {uploadInProgress: true};

        case UploadActions.STOP_UPLOAD:
            return {uploadInProgress: false};
    }

    // We don't care about any other actions right now.
    return lastState;
}