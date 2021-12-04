import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers';

export default function configureStore(initialstate) {
    let middleware;

    return createStore(
        rootReducer,
        initialstate
    );

}