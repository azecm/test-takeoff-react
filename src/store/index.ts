import {combineReducers, createStore} from "redux";
import {winStateReducer, WinStateStore} from "./storeResultState";
import {pollItemsReducer, PollItemsStore} from "./storePoll";


const rootReducer = combineReducers({
    winState: winStateReducer, pollItems: pollItemsReducer
});

export interface StoreState {
    winState: WinStateStore
    pollItems: PollItemsStore
}


export const store = createStore(rootReducer);
export type AppStore = typeof store;
