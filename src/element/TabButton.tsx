import React from 'react';
import style from './TabButton.module.scss';

interface Props {
    active?: boolean;
    children: React.ReactNode;
}

function TabButton(prop: Props) {
    return (
        <div className={`${style.host} ${prop.active ? style.active : ''}`}>
            <button>
                {prop.children}
            </button>
        </div>
    );
}

export default TabButton;