import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from '../reducer/city';

let initialState = {
    city: ''
};
const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(city,initialState, conposeEnhancers(applyMiddleware(thunk))); 
