import { act } from 'react-dom/test-utils';
import * as ACTION_TYPES from './loginTypes';

const initialState = {
    hasAutheticated: false,
    user: null,
    isAuthenticating: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticating: true
            }
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                user: action.payload,
                hasAutheticated: true,
                error: ''
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                user: null,
                hasAutheticated: false,
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;