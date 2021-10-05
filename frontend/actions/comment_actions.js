import * as APIUtil from "../util/comment_api_util"

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments,
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

const receiveCommentErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors,
    }
}

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveAllComments(comments))
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

export const deleteComment= (comment) => dispatch => (
    APIUtil.deleteComment(comment).then(commentId => (
        dispatch(removeComment(commentId))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
)