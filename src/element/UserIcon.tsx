import React from 'react';
import style from './UserIcon.module.scss';

interface Props {
    user: string;
    role: string;
    image: string;
}

function UserIcon(prop: Props) {
    const src = require(`../assets/${prop.image}`);
    const backgroundImage = `url("${src}")`;
    return (
        <div className={style.host}>
            <div className={style.image} style={{backgroundImage}}/>
            <div>
                <div className={style.user}>{prop.user}</div>
                <div className={style.role}>{prop.role}</div>
            </div>
        </div>
    );
}

export default UserIcon;