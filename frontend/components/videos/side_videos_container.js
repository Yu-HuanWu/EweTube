import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SideVideos from './side_videos';

const mapStateToProps = (state, ownProps) => {
    let userVideo = [];
    if (Object.values(state.entities.videos)) {
        Object.values(state.entities.videos).forEach(video => {
            userVideo.push(video);
        })
    } else { console.log("help") };
    if (userVideo.length > 0) {
        userVideo.sort((a, b)=>{
            return b.views-a.views})
    }
    return ({
        videos: userVideo.slice(0,5),
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SideVideos);