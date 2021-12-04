import * as types from '../actions/homeActionTypes';

const homePage = (state={all: []}, action) => {
    switch (action.type){
        case types.LOAD_HOME_PAGE_SUCCESS: {
            return Object.assign({}, state, {all: action.homePagedata});
        }
        default:{
            return state;}
    }
}

export default homePage;