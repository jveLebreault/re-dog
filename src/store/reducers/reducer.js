// import { combineReducers } from 'redux';

import {
    FETCH_BREED_LIST_REQUEST,
    RECEIVE_BREED_LIST,
    FETCH_BREED_IMAGE,
    RECEIVE_BREED_IMAGE
} from '../actions/actions';

const initialState = {
    breedList: [],
    isRequestPending: false,
    currentPage: 0,
    itemCount: 20
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
        
        case FETCH_BREED_IMAGE:
            return Object.assign({}, state, {
                isRequestPending: true
            });
        
        case RECEIVE_BREED_IMAGE:
            return Object.assign({}, state, {
                breedList: state.breedList.slice(0, action.breedIndex).concat([{
                    ...state.breedList[state.breedIndex],
                    imageUrl: action.image_url
                }]).concat(action.breedIndex + 1)
            });
        
        default:
            return state;
    };

}