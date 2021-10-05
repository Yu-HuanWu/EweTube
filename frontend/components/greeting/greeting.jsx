import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
    if (user) {
        return (
            <div className="greeting">
                <div className="dropdown">
                    <p className="user-avatar" style={{ backgroundColor: user.color }}>{user.username[0].toUpperCase()}</p>
                        <div className="dropdown-content">
                            <div className="dropdown-user-info">
                                <p className="user-avatar" style={{ backgroundColor: user.color }}>{user.username[0].toUpperCase()}</p>
                                <h1>{user.username}</h1>
                            </div>

                            <span></span>
                            <div className="dropdown-selection">
                                <Link to={`/users/${user.id}`}>
                                    <img src={yourchannelURL} alt="your channel" />
                                    <h1>Your channel</h1>
                                </Link>

                                <div onClick={logout}>
                                    <img src={signoutURL} alt="sign out" />
                                    <h1>Sign out</h1>
                                </div>

                                <span></span>

                                <a href="https://forms.gle/H8WpYarX3DB4FcDo9" target="_blank">
                                    <img src={feedbackURL} alt="send feedback" />
                                    <h1>Send feedback</h1>
                                </a>
                            </div>
                            {/* <button onClick={logout}>Log Out</button> */}
                        </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {/* <Link className="button" to="/signup">Sign Up</Link> */}
                <Link className="login-text" to="/login">
                    <div className="login">
                        <img src={window.loginURL} />Log In 
                    </div>
                </Link>
            </div>
        )
    }
}

export default Greeting