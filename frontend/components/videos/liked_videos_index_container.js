import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchLikes } from '../../actions/like_actions';
import LikedVideosIndex from './liked_videos_index';

const mapStateToProps = (state, ownProps) => {

    let userLikes = []
    if (Object.values(state.entities.likes)) {
        Object.values(state.entities.likes).forEach(like => {
            if (like.userId == ownProps.user.id) {
                userLikes.push(like);
            };
        })
    }

    return ({
        user: ownProps.user,
        videos: Object.values(state.entities.videos),
        likes: userLikes,
        // errors: state.errors.videos,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchVideos: () => dispatch(fetchVideos()),
        fetchLikes: (videoId) => dispatch(fetchLikes(videoId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedVideosIndex);