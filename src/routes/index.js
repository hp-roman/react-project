import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import history from "../services/history";
import HomePage from "../pages/HomePage";
import LoginScreen from "../pages/LoginScreen";
import DetailPage from '../pages/DetailPage';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/home" component={HomePage} />
          <Route path="/details/:id" component={DetailPage}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
