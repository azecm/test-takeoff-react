///import {ResultInterface} from "../poll/_common";
//import {WindowStateAction} from "./storeResultState";

import {DataPollItem, DataPollItemEntity, EType} from "../poll/_common";
import {Action} from "redux";

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_TYPE = 'UPDATE_TYPE';
const ADD_ENTITY = 'ADD_ENTITY';
const DROP_ENTITY = 'DROP_ENTITY';

let itemIndex = 0;
let entityIndex = 0;

export function addPollItemAction(): Action<typeof ADD_ITEM> & { payload: DataPollItem } {
    itemIndex++;
    return {
        type: ADD_ITEM,
        payload: {ind: itemIndex, type: EType.none, entityList: []}
    }
}


export function removePollItemAction(index: number): Action<typeof REMOVE_ITEM> & { payload: number } {
    return {
        type: REMOVE_ITEM,
        payload: index
    }
}

export function updatePollItemTypeAction(ind: number, itemType: EType): Action<typeof UPDATE_TYPE> & { ind: number, itemType: EType } {
    return {
        type: UPDATE_TYPE,
        ind,
        itemType
    }
}

export function addPollEntityAction(ind: number): Action<typeof ADD_ENTITY> & { ind: number, payload: DataPollItemEntity } {
    entityIndex++;
    return {
        type: ADD_ENTITY,
        ind,
        payload: {ind: entityIndex, elements: []}
    }
}

export function dropPollEntityAction(ind: number): Action<typeof DROP_ENTITY> & { ind: number } {
    return {
        type: DROP_ENTITY,
        ind
    }
}


type TPollActions =
    ReturnType<typeof addPollItemAction> |
    ReturnType<typeof removePollItemAction> |
    ReturnType<typeof updatePollItemTypeAction> |
    ReturnType<typeof addPollEntityAction> |
    ReturnType<typeof dropPollEntityAction>;

// ==================


const initialState = {
    data: [] as DataPollItem[]
};

export type PollItemsStore = typeof initialState;

export function getItem(items: DataPollItem[], ind: number) {
    for (const item of items) {
        if (item.ind === ind) {
            return item;
        }
    }
    return null;
}

export function pollItemsReducer(state = initialState, action: TPollActions): PollItemsStore {
    switch (action.type) {
        case ADD_ITEM:
            return {
                data: [...state.data, action.payload]
            };
        case REMOVE_ITEM:
            return {
                data: state.data.filter(i => i.ind !== action.payload)
            }
        case UPDATE_TYPE: {
            const item = getItem(state.data, action.ind);
            if (item) {
                item.type = action.itemType;
                return {data: [...state.data]};
            }
            return state;
        }
        case ADD_ENTITY: {
            const item = getItem(state.data, action.ind);
            if (item) {
                item.entityList = [...item.entityList, action.payload];
                return {data: [...state.data]};
            }
            return state;
        }
        case DROP_ENTITY: {
            const item = getItem(state.data, action.ind);
            if (item) {
                item.entityList = [];
                return {data: [...state.data]};
            }
            return state;
        }
        default:
            return state;
    }
}