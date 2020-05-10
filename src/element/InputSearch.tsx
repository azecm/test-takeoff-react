import React from 'react';
import style from './InputSearch.module.scss';
import {ReactComponent as IconSearch} from '../icons/search.svg';

function InputSearch() {
    return (
        <div className={style.host}>
            <input placeholder="Поиск по системе"/>
            <button>
                <IconSearch/>
            </button>
        </div>
    );
}

export default InputSearch;