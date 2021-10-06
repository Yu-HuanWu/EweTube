import * as APIUtil from "../util/comment_api_util"

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT =
'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments,
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment,
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId,
    }
}

const receiveCommentErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors,
    }
}

export const deleteComment = (comment) => dispatch => {
    return  APIUtil.deleteComment(comment).then(comment=> (
        dispatch(removeComment(comment.id))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
}

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
)

export const fetchComments = videoId => dispatch => (
    APIUtil.fetchComments(videoId).then(comments => (
        dispatch(receiveAllComments(comments))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
)

export const fetchComment = videoId => dispatch => (
    APIUtil.fetchComment(videoId).then(comment => (
        dispatch(receiveComment(comment))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
)
