import React from 'react';
import style from './PollBlock.module.scss';
import ResultBlock from "./ResultBlock";
import {DataPollItem, pollTypeName, ResItem, ResultInterface, TRow} from "./_common";
import AddCondition from "./AddCondition";
import PollItems from "./PollItems";
import {useStore} from "react-redux";
import {AppStore} from "../store";
import {openWindowAction} from "../store/storeResultState";



function getResult(items: DataPollItem[]) {
    const result: ResultInterface = {resultName: 'Опрос', items: [] as ResItem[]};
    for (const item of items) {
        if (!item.type || !item.entityList.length) continue;
        const rows = [] as TRow[];
        const resItem = {type: item.type, typeName: pollTypeName[item.type], rows} as ResItem;
        result.items.push(resItem);
        for (const entity of item.entityList) {
            switch (entity.elements.length) {
                case 0: {
                    break;
                }
                case 1: {
                    rows.push(entity.elements[0].value);
                    break;
                }
                default: {
                    const row = [] as (string | number)[];
                    rows.push(row);
                    for (const elem of entity.elements) {
                        row.push(elem.value);
                    }
                    break;
                }
            }
        }
    }
    return result;
}

function PollBlock() {
    const store = useStore() as AppStore;

    const resView = () => {
        store.dispatch(openWindowAction(getResult(store.getState().pollItems.data)));
    };

    return (
        <div className={style.host}>
            <header>Добавить опрос</header>
            <PollItems/>
            <AddCondition/>
            <footer>
                <button className={style.test} onClick={resView}>Протестировать опрос</button>
                <button className={style.next}>Далее →</button>
            </footer>
            <ResultBlock/>
        </div>
    );
}

export default PollBlock;