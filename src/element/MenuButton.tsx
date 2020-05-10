import React from 'react';
import style from './MenuButton.module.scss';

interface Props {
    active?: boolean;
    children: React.ReactNode[];
}

function MenuButton(prop: Props) {
    return (
        <div className={`${style.block} ${prop.active ? style.active : ''}`}>
            <button className={style.button}>
                {prop.children}
            </button>
        </div>
    );
}

export default MenuButton;