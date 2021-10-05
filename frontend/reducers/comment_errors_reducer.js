import { RECEIVE_COMMENT_ERRORS, RECEIVE_ALL_COMMENTS } from "../actions/comment_actions";


const commentErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_ALL_COMMENTS:
            return [];
        default:
            return oldState;
    }
}

export default commentErrorsReducer