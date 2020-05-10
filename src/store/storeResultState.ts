import {Action} from "redux";
import {ResultInterface} from "../poll/_common";

const CHANGE_STATE = 'CHANGE_STATE';

type TWinState = ResultInterface | null;

export interface WindowStateAction extends Action<typeof CHANGE_STATE>{
    payload: TWinState
}

export function openWindowAction(data:ResultInterface): WindowStateAction {
    return {
        type: CHANGE_STATE,
        payload: data
    }
}

export function closeWindowAction(): WindowStateAction {
    return {
        type: CHANGE_STATE,
        payload: null
    }
}


// ==========================


export interface WinStateStore {
    data: TWinState
}

const initialState: WinStateStore = {
    data: null
};

export function winStateReducer(state = initialState, action: WindowStateAction): WinStateStore {
    switch (action.type) {
        case CHANGE_STATE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
