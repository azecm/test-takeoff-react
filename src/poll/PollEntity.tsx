import React, {useEffect, useRef} from 'react';
import style from './PollEntity.module.scss';
import {DataPollItemEntity, EType, pollTitles} from "./_common";

interface Props {
    index: number
    type: EType;
    data: DataPollItemEntity;
}

function PollEntity(prop: Props) {
    const refForm = useRef<HTMLFormElement>(null);

    let row = null as React.ReactNode;
    switch (prop.type) {
        case EType.range:
            row = <>от <input type="text" name="from"/> до <input type="text" name="to"/></>;
            break;
        case EType.type:
            row = (
                <select name="type">
                    <option>Gold</option>
                    <option>Silver</option>
                </select>);
            break;
        case EType.status:
            row = (
                <select name="type">
                    <option>Активна</option>
                    <option>Пассивна</option>
                </select>);
            break;
    }

    useEffect(() => {
        if (refForm && refForm.current) {
            prop.data.elements = [...refForm.current.elements] as HTMLInputElement[];
        }
    }, [prop.data.elements]);

    const operator = prop.index > 1 ?
        <div className={`${style.operator} ${style['operator-' + prop.type]}`}>или</div> : null;

    return (
        <form className={style.host} ref={refForm}>
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