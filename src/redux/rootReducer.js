import { combineReducers } from 'redux';
//import usersReducer from './users/usersReducer';
import moviesReducer from './movies/moviesReducer';
import userReducer from './login/loginReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer
});

export default rootReducer;
