import * as ACTION_TYPES from './loginTypes';

export const loginRequest = () => {
    return {
        type: ACTION_TYPES.LOGIN_REQUEST
    }
}

export const loginSuccess = userData => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: userData,
    }
}

export const loginFailure = error => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE,
        payload: error,
    }
}