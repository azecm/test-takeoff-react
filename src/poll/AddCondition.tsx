import React from 'react';
import style from './AddCondition.module.scss';
import {useStore} from "react-redux";
import {AppStore} from "../store";
import {addPollItemAction} from "../store/storePoll";

function AddCondition() {

    const store = useStore() as AppStore;

    const onClick = () => {
        store.dispatch(addPollItemAction());
    };
    return (
        <div className={style.host}>
            <button onClick={onClick}>
                <svg focusable="false" data-icon="plus" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path fill="currentColor"
                          d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/>
                </svg>
                <div>
                    Нажмите, чтобы добавить новое условие выборки.<br/>
                    Все условия связываются между собой логическим "И"
                </div>
            </button>
        </div>
    );
}

export default AddCondition;