import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return({
        user: state.entities.users[ownProps.match.params.videoId],
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    })
}

export default connect (mapStateToProps, mapDispatchToProps)(UserShow);