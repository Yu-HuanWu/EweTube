import React from 'react';
import NavBar from '../navbar';
import { Link, Redirect } from 'react-router-dom';
import ErrorContainer from '../error_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            videos: true,
            about: false,
            liked: false
        }

        this.toggleTabs = this.toggleTabs.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.userId !== prevProp.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    toggleTabs(field) {
        if (field === 'video') {
            this.setState({
                [field]: true,
                about: false,
                liked: false
            })
        } else if (field === 'about') {
            console.log("about")
            this.setState({
                [field]: true,
                videos: false,
                liked: false
            })
        } else if (field === 'liked') {
            this.setState({
                [field]: true,
                videos: false,
                about: false
            })
        } else {
            this.setState({
                [field]: true,
                videos: false,
                about: false,
                liked: false
            })
        }
    }

    render() {
        if (this.props.errors.length > 0) {
            return (
                <ErrorContainer />
            )
        }
        if (!this.props.user) {
            return null;
        }

        return (
            <div>
                <NavBar />
                <div className="user-header">
                    <div className="user-page-info">
                        <div className="user-avatar" style={{ backgroundColor: this.props.user.color }}>
                            <p>{this.props.user.username[0].toUpperCase()}</p>
                        </div>
                            <h1>{this.props.user.username}</h1>
                    </div>

                    <div className="user-header-toggle">
                        <li onClick={() => this.toggleTabs('videos')} id="show-all-vids" className={this.state.videos ? "toggled" : " "}>Videos</li>
                        <li onClick={() => this.toggleTabs('about')} id="show-stats" className={this.state.about ? "toggled" : " "}>About</li>
                        <li onClick={() => this.toggleTabs('liked')} id="show-subs" className={this.state.liked ? "toggled" : " "}>Liked Videos</li>
                    </div>

                </div>

            </div>
        )
    }
}

export default UserShow;