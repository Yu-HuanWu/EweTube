import React from 'react';
import LoginFormContainer from "./sessionform/login_form_container"
import SignupFormContainer from "./sessionform/signup_form_container"
import { Route, Switch } from 'react-router-dom';

const App = ()=> (
    <div>
        <header>
            <h1>EweTube</h1>
        </header>
        <SignupFormContainer/>
        {console.log("test")}
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
    </div>
)

export default App;