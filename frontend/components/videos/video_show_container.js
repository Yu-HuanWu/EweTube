import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, updateViews } from '../../actions/video_actions';
import { fetchLikes, createLike, updateLike, deleteLike  } from '../../actions/like_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    let videoLikes = []
    if (Object.values(state.entities.likes)) {
        Object.values(state.entities.likes).forEach(like => {
            if (like.videoId == ownProps.match.params.videoId) {
                videoLikes.push(like);
            };
        })
    } else { console.log("no comment") }
    return({
        currentUser: state.entities.users[state.session.id],
        video: state.entities.videos[ownProps.match.params.videoId],
        likes: videoLikes,
        errors: state.errors.video,
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        updateViews: (video) => dispatch(updateViews(video)),
        fetchLikes: (videoId) => dispatch(fetchLikes(videoId)),
        createLike: (like) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);