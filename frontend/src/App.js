import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/index';
import Login from './components/login/login'
import GameApp from './components/game/GameApp'
export default class App extends Component {
    constructor(){
        super();
        this.state={
            user:{},
            loggedin:false
        }
        this.handlelogin = this.handlelogin.bind(this);
    }
    handlelogin(data){
        this.setState({
            user:data,
            loggedin:true
        })
        console.log(this.state)
        
        //window.location="/game";
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" render={props=>(
                        <Login  handlelogin = {this.handlelogin}/>
                    )} /> 
                    <Route path="/game" render = {props=>(
                        <GameApp user = {this.state.user} loggedin = {this.state.loggedin}/>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

