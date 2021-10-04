import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import VideosIndex from './videos_index';

const mapStateToProps = (state, ownProps) => {
    let userVideo = [];
    if (Object.values(state.entities.videos)) {
        Object.values(state.entities.videos).forEach(video => {
            userVideo.push(video);
        })
    } else {console.log("help")};

    return ({
        videos: userVideo,
        // errors: state.errors.videos,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosIndex);