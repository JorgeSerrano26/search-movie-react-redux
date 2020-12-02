import * as ACTION_TYPES from './usersTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ACTION_TYPES.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;