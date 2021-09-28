import * as APIUtil from "../util/video_api_util"

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_ERRORS";

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos,
    }
}

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video,
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors
    }
}

export const createVideo = video => dispatch => (
    APIUtil.createVideo(video).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
)

export const fetchVideo = videoId => dispatch => (
    APIUtil.fetchVideo(videoId).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
)
