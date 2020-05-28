import React, {useCallback} from 'react';
import style from './PollItem.module.scss';
import {EType, pollTitles, pollTypeName} from "./_common";
import ActionButton from "../element/ActionButton";
import {useStore} from "react-redux";
import {AppStore} from "../store";
import {
    addPollEntityAction,
    dropPollEntityAction,
    removePollItemAction,
    updatePollItemTypeAction
} from "../store/storePoll";
import PollEntityList from "./PollEntityList";

interface Props {
    index: number
    ind: number
    type: EType
}

function PollItem(prop: Props) {
    const store = useStore() as AppStore;

    const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = parseInt(e.target.value, 10);
        store.dispatch(updatePollItemTypeAction(prop.ind, type));
        store.dispatch(dropPollEntityAction(prop.ind));
        if (type) {
            store.dispatch(addPollEntityAction(prop.ind));
        }
    }, [store, prop]);

    const onAddEntity = useCallback(() => {
        if (prop.type) {
            store.dispatch(addPollEntityAction(prop.ind));
        }
    }, [store, prop]);

    const onRemoveCondition = useCallback(() => {
        store.dispatch(removePollItemAction(prop.ind));
    }, [store, prop]);

    const buttonText = pollTitles[prop.type].toLowerCase();

    return (
        <div className={`${style.pollItem} ${style['type-' + (prop.index % 4 + 1)]} `}>
            <div className={style.flex}>
                <div className={style.col1}>
                    <div className={style.title}>Условие</div>
                </div>
                <div className={style.col2}>
                    <select className={style.width100} onChange={onChange}>
                        <option value={EType.none}>Выберите условие</option>
                        <option value={EType.range}>{pollTypeName[EType.range]}</option>
                        <option value={EType.type}>{pollTypeName[EType.type]}</option>
                        <option value={EType.status}>{pollTypeName[EType.status]}</option>
                    </select>
                </div>
            </div>
            <div className={style.body}>
                <PollEntityList ind={prop.ind}/>
            </div>
            <div className={style.flex}>
                <div className={style.col1}/>
                <div className={`${style.col2} ${style.flex} ${style.flexBetween}`}>
                    <ActionButton type='add' onClick={onAddEntity}>Добавить {buttonText}</ActionButton>
                    <ActionButton type='remove' onClick={onRemoveCondition}>Удалить условие</ActionButton>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PollItem);