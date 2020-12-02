import { combineReducers } from 'redux';
//import usersReducer from './users/usersReducer';
import moviesReducer from './movies/moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;
