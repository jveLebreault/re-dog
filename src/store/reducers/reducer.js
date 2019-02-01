// import { combineReducers } from 'redux';

import {
    FETCH_BREED_LIST_REQUEST,
    RECEIVE_BREED_LIST,
} from '../actions/actions';

const initialState = {
    breedList: [],
    isRequestPending: false,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_BREED_LIST_REQUEST:
            return Object.assign({}, state, {
                isRequestPending: true
            });

        case RECEIVE_BREED_LIST:
            return Object.assign({}, state, {
                breedList: action.breedList,
                isRequestPending: false
            });
        
        default:
            return state;
    };

}