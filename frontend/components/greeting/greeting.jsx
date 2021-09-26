import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
    if (user) {
        return (
            <div>
                <p className="user-avatar">{user.username[0].toUpperCase()}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link className="button" to="/signup">Sign Up</Link>
                <Link className="login" to="/login">Log In </Link>
            </div>
        )
    }
}

export default Greeting