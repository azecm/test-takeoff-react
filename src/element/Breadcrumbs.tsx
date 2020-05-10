import React from 'react';
import style from './Breadcrumbs.module.scss';
import {ReactComponent as IconHome} from '../icons/home.svg';

interface Props {
    parts: string[];
}

function Breadcrumbs(prop: Props) {
    const links = prop.parts.map((text, i) => <a href={`#` + text} key={i}>{text}</a>)
    return (
        <div className={style.host}>
            <a href="#home">
                <IconHome/>
            </a>
            {links}
        </div>
    );
}

export default Breadcrumbs;