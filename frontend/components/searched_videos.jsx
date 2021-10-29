import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/video_actions';
import NavBar from './navbar';
import SideMenu from './side_menu';

class SearchedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            videos: ''
        }

        this.filterVideo= this.filterVideo.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos().then(()=> this.filterVideo());
    }

    componentDidUpdate(prevProp) {
        if (prevProp.match.params.searchQuery !== this.props.match.params.searchQuery) {
            this.filterVideo();
        }
    }

    filterVideo(){
        let filteredVideos;
        if (this.props.match.params.searchQuery.length >= 1) {
            filteredVideos = this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.description.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.user.username.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase())
            })
        }
        this.setState({ videos: filteredVideos })
    }

    render() {
        let vids;
        if (this.state.videos.length > 0) {
            vids = this.state.videos.map(video => {
                if (video.thumbnail === "none") {
                    video.thumbnail = window.defaultThumbnail
                }
                return (
                    <div key={video.id} className="user-video-show" onClick={() => this.props.history.push(`/videos/${video.id}`)}>
                        <img className="search-video-thumbnail" src={video.thumbnail} />
                        <div className="search-video-info">
                            <h1>{video.title}</h1>
                            <div className="video-view-created">
                                <span >{video.views} views &#8226;</span>
                                <span > {video.createdDate}</span>
                            </div>
                            <Link to={`/users/${video.user.id}`}>
                                <p className="user-avatar" style={{ backgroundColor: video.user.color }}>{video.user.username[0].toUpperCase()}</p>
                                <h2>{video.user.username}</h2>
                            </Link>
                        </div>

                    </div>
                )
            })
        }
        return (
            <div className="main">
                <SideMenu />
                <div className="main-main">
                    <NavBar />
                    <h1 className="user-page-title">Search</h1>
                    <div className="all-search-videos">
                        {vids ? vids : <div>You found the black sheep! It's hiding in the black background! <br/> (Try search again)</div>}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {

    return ({
        videos: Object.values(state.entities.videos),
        // errors: state.errors.videos,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedVideos));
