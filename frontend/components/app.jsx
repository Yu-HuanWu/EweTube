import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./sessionform/login_form_container"
import SignupFormContainer from "./sessionform/signup_form_container"
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Link } from 'react-router-dom';

const App = ()=> (
    <div>
        <header>
            <Link to="/"><img src={window.logoURL} className="logo"/></Link>
            <GreetingContainer/>
        </header>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
)

export default App;