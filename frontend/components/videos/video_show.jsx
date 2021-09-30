import React from 'react';
import NavBar from '../navbar';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log("testing")
        console.log(this.props.match.params.videoId)
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        if (!this.props.video) {
            return null;
        }

        return(
            <div>
                <NavBar/>
                <div>
                    <video 
                    src={this.props.video.videoUrl}
                    height="500"
                    width="980"
                    controls
                    autoPlay
                    ></video>
                    <div>
                        <h1>{this.props.video.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;