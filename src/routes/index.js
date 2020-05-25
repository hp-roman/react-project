import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from '../pages/LoginScreen';
import HomePage from '../pages/HomePage';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={LoginScreen}/>
            <Route path="/home" component={HomePage}/>
            <Route component={LoginScreen}/>
        </Switch>
    );
}