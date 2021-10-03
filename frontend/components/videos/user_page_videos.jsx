import React from 'react';

export default class UserPageVideos extends React.Component {
    constructor(props) {
        super(props);
        // this.toggleVideos = this.toggleVideos.bind(this);
    }

    componentDidMount() {
        // debugger
        // this.props.fetchUser(this.props.match.params.id);
        // this.props.fetchVideos();
    }

    render() {
        let vids;
        if (this.props.allProps.videos.length > 0) {
            vids = this.props.allProps.videos.map(video => {
                if (video.thumbnail === "none") {
                    video.thumbnail = window.defaultThumbnail
                }
                return (
                    <div className="user-video-show">
                        <img className="user-video-thumbnail" width="210" height="118" onClick={ () => this.props.allProps.history.push(`/videos/${ video.id }`) } src={ `${ video.thumbnail }` } />
                        <h1>{ video.title }</h1>
                        <div className="uploaded-box-date">
                            <span >{video.views} views &#8226;</span>
                            <span > {video.createdDate}</span>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1 className="user-page-title">Videos</h1>
                <div className="all-videos">
                    {vids ? vids : "Upload videos for them to appear here!"}
                </div>
            </div>
        )
    }
}