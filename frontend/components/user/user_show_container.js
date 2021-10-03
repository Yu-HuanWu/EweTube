import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchVideos } from '../../actions/video_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    let userVideo= [];
    
    if (Object.values(state.entities.videos)) {
        Object.values(state.entities.videos).forEach( video => {
            if (video.userId == ownProps.match.params.userId) {
                    userVideo.push(video);
            };
        })
    } else { console.log("no video")}
    
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        videos: userVideo,
        errors: state.errors.user,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);