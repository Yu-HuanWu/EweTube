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

        if (this.state.searchquery.length > 0) {
            this.props.history.push({
                pathname: `/search/${this.state.searchquery}`
            })
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
                                <img src={searchURL} width="28px"/>
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