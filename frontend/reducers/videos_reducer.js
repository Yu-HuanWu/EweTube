import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, action.videos);
        case RECEIVE_VIDEO:
            console.log(action);
            nextState[action.video.id]= action.video;
            return nextState;
        case REMOVE_VIDEO:
            delete newState[action.videoId];
            return newState;
        default:
            return oldState;
    }
};

export default videosReducer;