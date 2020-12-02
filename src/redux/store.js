import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//Middlewares
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    logger,
    thunkMiddleware
)));

export default store;