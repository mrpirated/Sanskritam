import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/index';
import Login from './components/login/login'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;