import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./sessionform/login_form_container"
import SignupFormContainer from "./sessionform/signup_form_container"
import ErrorContainer from "./error_container"
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import VideoShowContainer from './videos/video_show_container';
import UserShowContainer from './user/user_show_container';

const App = ()=> (
    <div className="body">
        <Switch>
            <Route exact path="/videos/:videoId" component={VideoShowContainer}/>
            <Route exact path="/users/:userId" component={UserShowContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Route exact path="/" component={NavBar} />
            <Route component={ErrorContainer}/>
        </Switch>
    </div>
)

export default App;