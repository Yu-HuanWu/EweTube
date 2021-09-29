import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {

        return(
            
        )
    }
}