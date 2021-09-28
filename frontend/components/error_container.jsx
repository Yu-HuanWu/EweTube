import React from 'react';
import { Link } from 'react-router-dom';

class ErrorContainer extends React.Component{
    render(){
        return(
            <div className="pagenotfound">
                <Link to="/"><img src={window.errorURL} alt="baaaaad site"/></Link>
                <br />
                <p>This page isn't available. Sorry about that.</p>
                <p>Click on the sheep to go back to the home page.</p>
            </div>
        )
    }
}

export default ErrorContainer