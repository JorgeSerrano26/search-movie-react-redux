import * as ACTION_TYPES from './usersTypes';

export const fetchUsersRequest = () => {
    return {
        type: ACTION_TYPES.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: ACTION_TYPES.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: ACTION_TYPES.FETCH_USERS_FAILURE,
        payload: error
    }
}

