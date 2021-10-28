import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from '../navbar';
import { Link, Redirect } from 'react-router-dom';
import ErrorContainer from '../error_container';
import CommentsContainer from '../comments/comments_container';
import SideVideosContainer from './side_videos_container';
import LikesIndex from './likes_index';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleViews= this.handleViews.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchLikes(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.videoId !== prevProp.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
            this.props.fetchLikes(this.props.match.params.videoId);
        }
    }

    handleViews() {
        this.props.updateViews({
            views: this.props.video.views + 1,
            id: this.props.video.id,
        });
    }

    render() {
        if (this.props.errors.length > 0) {
            return (
                <ErrorContainer/>
            )
        }
        if (!this.props.video || !this.props.likes) {
            return null;
        }
        
        let likedValue= 0;
        let userLikes;
        if (this.props.currentUser) {
            userLikes = Object.values(this.props.likes).filter(like => like.userId === this.props.currentUser.id)
        }
        if (userLikes){
            if (userLikes.length > 0){
                if (userLikes[0].numLikes === 1) {
                    likedValue = 1;
                } else {
                    likedValue = -1;
                }
            }
        }
        return(
            <div>
                <NavBar/>
                <div className="video-show-page">
                    <div className="video-show">
                        {/* <video 
                        src={this.props.video.videoUrl}
                        controls
                        autoPlay
                        onEnded= {this.handleViews}
                        ></video> */}
                        <div className="video-player-div">
                            <ReactPlayer
                                url={this.props.video.videoUrl}
                                light={false}
                                playing= {false}
                                controls= {true} 
                                onStart= {this.handleViews}
                                className="video-player"/>
                        </div>
                        <div className="video-info">
                            <div className="video-info-likes">
                                <div className="video-title-views">
                                    <h1>{this.props.video.title}</h1>
                                    <h2>{this.props.video.views} views &#8226; {this.props.video.createdDate}</h2>
                                </div>
                                <div className="video-likes">
                                    <LikesIndex
                                        currentUser= {this.props.currentUser}
                                        likes = {this.props.likes}
                                        likedValue = {likedValue}
                                        videoId={this.props.match.params.videoId}
                                        history = {this.props.history}
                                        createLike = {this.props.createLike}
                                        updateLike = {this.props.updateLike}
                                        deleteLike = {this.props.deleteLike}
                                    />
                                </div>
                            </div>
                            <div className="video-user-info">
                                <Link to={`/users/${this.props.video.user.id}`}>
                                    <div className="user-avatar" style={{ backgroundColor: this.props.video.user.color }}>
                                        {this.props.video.user.username[0].toUpperCase()}
                                    </div>
                                </Link>
                                <h3><Link to={`/users/${this.props.video.user.id}`}>{this.props.video.user.username}</Link></h3>
                            </div>
                            <h4>{this.props.video.description}</h4>
                        </div>
                        <CommentsContainer videoId= {this.props.video.id}/>
                    </div>
                    <div className="video-index-side">
                        <SideVideosContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;