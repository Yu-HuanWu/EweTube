import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKES = 'RECEIVE_LIKES';

const receiveLikes = likes => {
    return {
        type: RECEIVE_LIKES,
        likes,
    }
};

export const fetchLikes = videoId => dispatch => (
    APIUtil.fetchLikes(videoId).then(likes=> (
        dispatch(receiveLikes(likes))
    ))
)


export const createLike = like => dispatch => (
    APIUtil.createLike(like).then(likes=> (
        dispatch(receiveLikes(likes))
    ))
)

export const updateLike = like => dispatch => (
    APIUtil.updateLike(like).then(likes => (
        dispatch(receiveLikes(likes))
    ))
)

export const deleteLike = like => dispatch => (
    APIUtil.deleteLike(like).then(likes => (
        dispatch(receiveLikes(likes))
    ))
)