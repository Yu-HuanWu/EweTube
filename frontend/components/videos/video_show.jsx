import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from '../navbar';
import { Link, Redirect } from 'react-router-dom';
import ErrorContainer from '../error_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleViews= this.handleViews.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.videoId !== prevProp.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
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
        if (!this.props.video) {
            return null;
        }
        
        return(
            <div>
                <NavBar/>
                <div className="video-show">
                    {/* <video 
                    src={this.props.video.videoUrl}
                    height="500"
                    width="980"
                    controls
                    autoPlay
                    onEnded= {this.handleViews}
                    ></video> */}
                    <ReactPlayer
                        url={this.props.video.videoUrl}
                        light={false}
                        playing= {false}
                        controls= {true} 
                        onStart= {this.handleViews}
                        className="video-player"/>
                    <div className="video-info">
                        <h1>{this.props.video.title}</h1>
                        <h2>{this.props.video.views} views * {this.props.video.createdDate}</h2>
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
                </div>
            </div>
        )
    }
}

export default VideoShow;