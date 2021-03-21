import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


import { eventiReducer } from './reducer/eventiReducer.js';
import { userReducer } from './reducer/userReducer.js';

const rootReducer = combineReducers({
    eventiModule: eventiReducer,
    user: userReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
