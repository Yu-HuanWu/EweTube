import React from 'react';
import { Link } from 'react-router-dom';


class SideVideos extends React.Component {
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
                    <div key={video.id} className="side-video-show">
                        <Link to={`/videos/${video.id}`}>
                            <img className="user-video-thumbnail" src={video.thumbnail} />
                        </Link>
                        <div className="index-video-info">
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
                <h1 className="user-page-title">Most viewed</h1>
                <div className="all-videos">
                    {vids ? vids : "You found the black sheep! It's hiding in the black background!"}
                </div>
            </div>
        )
    }
}

export default SideVideos