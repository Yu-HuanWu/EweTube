import React from 'react';

export default class UserPageVideos extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let vids;
        if (this.props.allProps.videos.length > 0) {
            vids = this.props.allProps.videos.map(video => {
                if (video.thumbnail === "none") {
                    video.thumbnail = window.defaultThumbnail
                }
                return (
                    <div className="user-video-show" onClick={() => this.props.allProps.history.push(`/videos/${video.id}`)}>
                        <img className="user-video-thumbnail" width="210" height="118" src={ `${ video.thumbnail }` } />
                        <h1>{ video.title }</h1>
                        <div className="video-view-created">
                            <span >{video.views} views &#8226;</span>
                            <span > {video.createdDate}</span>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1 className="user-page-title">Uploads</h1>
                <div className="all-user-videos">
                    {vids ? vids : "You found the black sheep! It's hiding in the black background!"}
                </div>
            </div>
        )
    }
}