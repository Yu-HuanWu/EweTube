import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
    if (user) {
        return (
            <div className="greeting">
                <div>
                    <p className="user-avatar" style={{ backgroundColor: user.color }}>{user.username[0].toUpperCase()}</p>
                </div>
                <button onClick={logout}>Log Out</button>
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