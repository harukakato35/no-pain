import { createStore, applyMiddleware, compose } from 'redux';

import { routerMiddleware } from 'connected-react-router';
import {rootReducer} from './rootReducer';

const createBrowserHistory = require('history').createBrowserHistory;







export const history = createBrowserHistory();


    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(preloadedState) {

        const store = createStore(
            rootReducer(history),
            preloadedState,
            composeEnhancers(
                applyMiddleware(
                    routerMiddleware(history),
                )
        )
        );

    return store;
};