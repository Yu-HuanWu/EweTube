import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from '../navbar';
import { Link, Redirect } from 'react-router-dom';
import ErrorContainer from '../error_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.videoId !== prevProp.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
        }
    }

    render() {
        if (this.props.errors.length > 0) {
            console.log("error")
            return (
                <ErrorContainer/>
            )
        }
        if (!this.props.video) {
            return null;
        } else { this.props.video.views += 1;}
        
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
                    ></video> */}
                    <ReactPlayer
                        url={this.props.video.videoUrl}
                        light={false}
                        playing= {false}
                        controls= {true} 
                        className="video-player"/>
                    <div className="video-info">
                        <h1>{this.props.video.title}</h1>
                        <h2>{this.props.video.views} views * {this.props.video.createdDate}</h2>
                        <div className="user-avatar" style={{ backgroundColor: this.props.video.user.color }} >{this.props.video.user.username[0].toUpperCase()}</div>
                        <h3>{this.props.video.user.username}</h3>
                        <h4>{this.props.video.description}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;