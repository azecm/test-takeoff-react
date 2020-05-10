import React from 'react';
import style from './ActionButton.module.scss';
import {ReactComponent as IconPlus} from '../icons/plus.svg';
import {ReactComponent as IconTrash} from '../icons/trash-alt.svg'

interface Props {
    type: 'add' | 'remove';
    onClick: () => void;
    children: React.ReactNode;
}

function ActionButton(prop: Props) {
    const icon = prop.type === 'add' ? <IconPlus/> : <IconTrash/>;
    return (
        <button className={`${style.button} ${style['type_' + prop.type]}`} onClick={prop.onClick}>
            {icon}
            <span className={style.text}>
                {prop.children}
            </span>
        </button>
    );
}

export default ActionButton;