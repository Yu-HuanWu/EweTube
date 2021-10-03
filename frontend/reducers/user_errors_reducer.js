import { RECEIVE_USER_ERRORS, RECEIVE_USER } from "../actions/user_actions";


const userErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        default:
            return oldState;
    }
}

export default userErrorsReducer