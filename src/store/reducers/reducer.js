// import { combineReducers } from 'redux';

import {
    FETCH_BREED_LIST_REQUEST,
    RECEIVE_BREED_LIST,
    CHANGE_CURRENT_PAGE,
    CHANGE_PAGE_SIZE
} from '../actions/actions';

const initialState = {
    breedList: [],
    isRequestPending: false,
    currentPage: 0,
    pageSize: 20
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
        
        case CHANGE_CURRENT_PAGE:
            return Object.assign({}, state, {
                currentPage: action.currentPage
            });

        case CHANGE_PAGE_SIZE:
            return Object.assign({}, state, {
                pageSize: action.pageSize
            });
        
        default:
            return state;
    };

}