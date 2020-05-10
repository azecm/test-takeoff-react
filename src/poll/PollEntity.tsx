import React from 'react';
import style from './PollEntity.module.scss';
import {DataPollItemEntity, EType, pollTitles} from "./_common";

interface Props {
    index: number
    type: EType;
    data: DataPollItemEntity;
}

function PollEntity(prop: Props) {
    prop.data.elements = [];
    const getRef = (el:HTMLInputElement|HTMLSelectElement|null)=>{
        if(el){
            prop.data.elements.push(el);
        }
    };

    let row = null as React.ReactNode;
    switch (prop.type) {
        case EType.range:
            row = <>от <input type="text" name="from" ref={getRef}/> до <input type="text" name="to" ref={getRef}/></>;
            break;
        case EType.type:
            row = (
                <select name="type" ref={getRef}>
                    <option>Gold</option>
                    <option>Silver</option>
                </select>);
            break;
        case EType.status:
            row = (
                <select name="type" ref={getRef}>
                    <option>Активна</option>
                    <option>Пассивна</option>
                </select>);
            break;
    }

    const operator = prop.index > 1 ?
        <div className={`${style.operator} ${style['operator-' + prop.type]}`}>или</div> : null;

    return (
        <form className={style.host}>
            <div className={style.col1}>
                {operator}
                {pollTitles[prop.type]} {prop.index}
            </div>
            <div className={style.col2}>
                {row}
            </div>
        </form>
    );
}

export default React.memo(PollEntity);