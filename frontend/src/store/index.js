import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './authReducer';
import subjectReducer from './subjectReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    subjects: subjectReducer
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
        : compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
    enhancer = applyMiddleware(thunk);
}

const configureStore = preLoadedState => {
    return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;
