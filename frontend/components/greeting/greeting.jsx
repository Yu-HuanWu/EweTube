import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
    if (user) {
        return (
            <div className="greeting">
                <div>
                    <p className="user-avatar">{user.username[0].toUpperCase()}</p>
                </div>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                {/* <Link className="button" to="/signup">Sign Up</Link> */}
                <div className="login">
                    <img src={window.loginURL} />
                    <Link className="login-text" to="/login">Log In </Link>
                </div>
            </div>
        )
    }
}

export default Greeting