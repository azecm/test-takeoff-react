import React, {useCallback} from 'react';
import style from './AddCondition.module.scss';
import {useStore} from "react-redux";
import {AppStore} from "../store";
import {addPollItemAction} from "../store/storePoll";
import {ReactComponent as IconPlus} from '../icons/plus-2.svg';

function AddCondition() {

    const store = useStore() as AppStore;

    const onClick = useCallback(() => {
        store.dispatch(addPollItemAction());
    }, [store]);

    return (
        <div className={style.host}>
            <button onClick={onClick}>
                <IconPlus/>
                <div>
                    Нажмите, чтобы добавить новое условие выборки.<br/>
                    Все условия связываются между собой логическим "И"
                </div>
            </button>
        </div>
    );
}

export default AddCondition;