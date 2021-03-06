import React, {useCallback, useEffect} from 'react';
import style from './ResultBlock.module.scss';
import {connect} from "react-redux";
import {StoreState} from "../store";
import {closeWindowAction, WinStateStore} from "../store/storeResultState";


function ResultBlock(prop: {} & WinStateStore & typeof mapDispatchToProps) {
    const onClose = useCallback(() => {
        prop.close();
    }, [prop]);

    useEffect(() => {
        if (prop.data?.items.length) {
            fetch('/api/', {credentials: 'include', method: 'post', body: JSON.stringify(prop.data)}).then().catch();
        }
    }, [prop]);

    if (!prop.data) {
        return (<></>);
    }

    const res = prop.data.items.length ? JSON.stringify(prop.data) : 'Нет данных';

    return (
        <div className={style.host} onClick={onClose}>
            <section>
                <article>
                    <h2>Результат</h2>
                    {res}
                </article>
                <p>Кликните в любом месте для закрытия окна</p>
            </section>
        </div>
    );
}

function mapStateToProps(state: StoreState): WinStateStore {
    return {
        ...state.winState
    }
}

const mapDispatchToProps = {
    close: closeWindowAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBlock);