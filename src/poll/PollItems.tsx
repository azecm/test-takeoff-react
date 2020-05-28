import React from 'react';
import PollItem from "./PollItem";
import {StoreState} from "../store";
import {connect} from "react-redux";
import {PollItemsStore} from "../store/storePoll";

function PollItems(prop: {} & PollItemsStore) {
    return (
        <>{prop.data.map((item, ind) =>
            <PollItem index={ind}
                      type={item.type}
                      ind={item.ind}
                      key={item.ind}/>)}
        </>
    );
}

function mapStateToProps(state: StoreState): PollItemsStore {
    return {
        ...state.pollItems
    }
}

export default connect(mapStateToProps)(PollItems);