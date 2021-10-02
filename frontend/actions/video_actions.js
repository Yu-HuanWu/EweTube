import * as APIUtil from "../util/video_api_util"

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

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

const removeVideo = videoId=> {
    return {
        type: REMOVE_VIDEO,
        videoId,
    }
}

const receiveVideoErrors = errors=> {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors,
    }
}

export const createVideo = video => dispatch => (
    APIUtil.createVideo(video).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
)

export const fetchVideo = videoId => dispatch => (
    APIUtil.fetchVideo(videoId).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
)

export const fetchVideos = () => dispatch => (
    APIUtil.fetchVideos().then(videos=>(
        dispatch(receiveAllVideos(videos))
    ), err=> (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
)

export const deleteVideo = (videoId) => dispatch => (
    APIUtil.deleteVideo(videoId).then(video=> (
        dispatch(removeVideo(video.id))
    ), err=> (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
)

export const updateViews = (video) => dispatch => (
    APIUtil.updateViews(video).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
)