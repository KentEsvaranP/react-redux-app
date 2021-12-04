import { combineReducers } from "redux";
import homePage from './homeReducer';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
    homePage
    // LoginReducer
});

export default rootReducer;