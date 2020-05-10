import React from 'react';
import style from './App.module.scss';
import LeftBlock from "./block/LeftBlock";
import ContentBlock from "./block/ContentBlock";

//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

function App() {
    return (
        <div className={style.page}>
            <LeftBlock/>
            <ContentBlock/>
        </div>
    );
}

export default App;
