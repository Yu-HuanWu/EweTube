import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveUserErrors = errors => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

export const fetchUser = userId => dispatch => {
    return APIUtil.fetchUser(userId).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
}
