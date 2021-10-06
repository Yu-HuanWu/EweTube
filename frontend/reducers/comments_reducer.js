import { RECEIVE_ALL_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            // nextState = action.comments;
            // return nextState;
            return Object.assign({}, action.comments);
        case REMOVE_COMMENT:
            console.log("COMMENT REDUCER")
            console.log(action.commentId);
            delete nextState[action.commentId];
            return nextState;
        default:
            return oldState;
    }
};

export default commentsReducer;