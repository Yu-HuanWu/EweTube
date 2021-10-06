import React from 'react';
import { Link } from 'react-router-dom';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if (!this.props.videos) {
            return null;
        }

        let vids;
        if (this.props.videos.length > 0) {
            vids = this.props.videos.map(video => {
                if (video.thumbnail === "none") {
                    video.thumbnail = window.defaultThumbnail
                }
                return (
                    <div className="index-video-show">
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
                <h1 className="user-page-title">Trending Videos</h1>
                <div className="all-videos">
                    {vids ? vids : "You found the black sheep! It's hiding in the black background!"}
                </div>
            </div>
        )
    }
}

export default VideosIndex