import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import SearchedVideos from './searched_videos';
import { fetchVideos } from '../actions/video_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



// const NavBar=()=>(
//     <div className="navbar">
//         <div className="header">
//             <Link to="/"><img src={window.logoURL} className="logo" /></Link>
//             <GreetingContainer />
//         </div>
//     </div>
// )

// export default NavBar

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchquery: ''
        };

        this.update = this.update.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    update(e) {
        this.setState({ searchquery: e.currentTarget.value });
    }

    handleSearch(e) {
        e.preventDefault();
        // this.props.fetchVideos();
        let filteredVideos;
        console.log(this.props.videos);
        if (this.state.searchquery.length >= 1) {
            filteredVideos= this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(this.state.searchquery.toLowerCase()) || 
                video.description.toLowerCase().includes(this.state.searchquery.toLowerCase()) ||
                video.user.username.toLowerCase().includes(this.state.searchquery.toLowerCase())
            })
        }
        console.log(filteredVideos)

        if (!!filteredVideos) {
            this.props.history.push({
                pathname: '/search',
                videos: filteredVideos
            })
            // <Redirect to="/search" videos={filteredVideos} />
        }
    }

    render(){
        return(
            <div className="navbar">
                <div className="header">
                    <Link to="/"><img src={window.logoURL} className="logo" /></Link>
                    <form className="search-container" onSubmit={this.handleSearch} >
                        <input className="search-bar" type="text" placeholder="Search" value={this.state.searchquery} onChange={this.update} />
                            <button className="search-button" type="submit">
                                🔍
                            </button>
                    </form>
                    <GreetingContainer />
                </div>
            </div>
        )
    }
}

// export default NavBar;

const mapStateToProps = (state, ownProps) => {

    return ({
        videos: Object.values(state.entities.videos),
        // errors: state.errors.videos,
    })
}

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         fetchVideos: () => dispatch(fetchVideos()),
//     })
// }

export default withRouter(connect(mapStateToProps, null)(NavBar));