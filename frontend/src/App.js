import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/index';
import Login from './components/login/login'
import GameApp from './components/game/GameApp'
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/game" exact component ={GameApp}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;