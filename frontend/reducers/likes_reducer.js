import { RECEIVE_LIKES } from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_LIKES:
            nextState = action.likes;
            return nextState;
        default:
            return oldState;
    }
};

export default likesReducer;