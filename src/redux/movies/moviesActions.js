import * as ACTION_TYPES from './moviesTypes';

export const fetchMoviesRequest = () => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesFailure = (error) => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_FAILURE,
        payload: error
    }
}