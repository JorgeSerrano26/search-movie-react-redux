import * as ACTION_TYPES from './moviesTypes';

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;