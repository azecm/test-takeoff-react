import React from 'react';
import {StoreState} from "../store";
import {connect} from "react-redux";
import {getItem} from "../store/storePoll";
import {DataPollItem} from "./_common";
import {Dispatch} from "redux";
import PollEntity from "./PollEntity";

interface Props {
    ind: number
}

function PollEntityList(prop: Props & DataPollItem & {dispatch: Dispatch}) {
    return (
        <>
            {prop.entityList.map((entity, i)=>
                <PollEntity
                    index={i + 1}
                    type={prop.type}
                    data={entity}
                    key={entity.ind}/>)}
        </>
    );
}

function mapStateToProps(state: StoreState, ownProp: Props) {
    const item = getItem(state.pollItems.data, ownProp.ind) as DataPollItem;
    return {
        ...item
    }
}

export default connect(mapStateToProps)(PollEntityList);