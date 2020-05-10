import React from 'react';
import style from './ContentBlock.module.scss';
import InputSearch from "../element/InputSearch";
import UserIcon from "../element/UserIcon";
import Breadcrumbs from "../element/Breadcrumbs";
import TabButton from "../element/TabButton";
import PollBlock from "../poll/PollBlock";

const breadcrumbs = ['Опросы', 'Добавить опрос'];

function ContentBlock() {
    return (
        <div className={style.host}>
            <div className={style.row}>
                <InputSearch/>
                <UserIcon user="Alexandr C." role="Администратор" image="photo.jpg"/>
            </div>
            <div className={style.row}>
                <Breadcrumbs parts={breadcrumbs}/>
            </div>
            <div className={style.tab_buttons}>
                <TabButton>Параметры</TabButton>
                <TabButton>Вопросы</TabButton>
                <TabButton>Логика</TabButton>
                <TabButton>Условия</TabButton>
                <TabButton active={true}>Респонденты</TabButton>
            </div>
            <div className={style.tab_view}>
                <PollBlock/>
            </div>
        </div>
    );
}

export default ContentBlock;