import React from 'react';
import { Link } from 'react-router-dom';


class LikedVideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id).then(() => {
            this.props.fetchVideos().then(()=> {
                this.props.fetchLikes()
            });
        });
    }

    componentDidUpdate(prevProp) {
        if (this.props.user.id !== prevProp.user.id) {
            this.props.fetchUser(this.props.user.id);
        }
    }

    render() {
        if (!this.props.videos || !this.props.user) {
            return null;
        }

        let likedVideo = [];
        if (this.props.videos.length > 0) {
            Object.values(this.props.videos).forEach(video => {
                if (this.props.likes) {
                   this.props.likes.forEach(like => {
                       if (like.videoId === video.id && like.numLikes === 1) {
                           likedVideo.push(video);
                       }
                   })
                }
            })
        }

        let vids;
        if (likedVideo.length > 0) {
            vids = likedVideo.map(video => {
                if (video.thumbnail === "none") {
                    video.thumbnail = window.defaultThumbnail
                }
                return (
                    <div key={video.id} className="index-video-show">
                        <Link to={`/videos/${video.id}`}>
                            <img className="user-video-thumbnail" width="210" height="118" src={video.thumbnail} />
                        </Link>
                        <div className="index-video-info">
                            <Link to={`/users/${video.user.id}`}><p className="user-avatar" style={{ backgroundColor: video.user.color }}>{video.user.username[0].toUpperCase()}</p></Link>
                            <div className="index-video-info-side">
                                <Link to={`/videos/${video.id}`}><h1>{video.title}</h1></Link>
                                <Link to={`/users/${video.user.id}`}><h2>{video.user.username}</h2></Link>
                                <Link to={`/videos/${video.id}`}>
                                    <div className="index-video-view-created">
                                        <span >{video.views} views &#8226;</span>
                                        <span > {video.createdDate}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1 className="user-page-title">Videos liked by {this.props.user.username}</h1>
                <div className="all-videos">
                    {vids ? vids : <h2>{this.props.user.username} has not liked any videos yet</h2>}
                </div>
            </div>
        )
    }
}

export default LikedVideosIndex