import {Action} from "redux";
import {AppState} from "./app.store";

import {uploadReducer} from "./upload/upload.reducers";

export function rootReducer(lastState: AppState, action: Action): AppState {
    console.log('previous state: ' + JSON.stringify(lastState));
    let nextState: AppState = uploadReducer(lastState, action);
    console.log('next state: ' + JSON.stringify(nextState));

    return nextState;
}