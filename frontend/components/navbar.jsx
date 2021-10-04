import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Link } from 'react-router-dom';

const NavBar=()=>(
    <div className="navbar">
        <div className="header">
            <Link to="/"><img src={window.logoURL} className="logo" /></Link>
            <GreetingContainer />
        </div>
    </div>
)

export default NavBar