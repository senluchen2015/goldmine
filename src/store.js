import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const initialMiddleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    initialMiddleware.push(createLogger({}));
}

const store = createStore(combineReducers(reducers), compose(applyMiddleware(...initialMiddleware)));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
        const nextRootReducer = require('reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;