import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./sessionform/login_form_container"
import SignupFormContainer from "./sessionform/signup_form_container"
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

const App = ()=> (
    <div className="body">
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Route path="/" component={NavBar} />
        </Switch>
    </div>
)

export default App;