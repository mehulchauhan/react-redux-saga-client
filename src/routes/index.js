import React from "react";
import { Route, Switch } from "react-router";

import Home from "../container/Home";
import Hello from "../container/Hello";
import Counter from "../container/Counter";
import NoMatch from "../container/NoMatch";
import Profile from "../container/user/Profile";
import Settings from "../container/user/Settings";

import NavBar from "../components/NavBar";

const routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/counter" component={Counter} />
        <Route path="/user/profile" component={Profile} />
        <Route path="/user/settings" component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default routes;
