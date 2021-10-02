import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, updateViews } from '../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        errors: state.errors.video,
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        updateViews: (video) => dispatch(updateViews(video)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);