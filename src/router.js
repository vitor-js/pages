import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Fruit from "./pages/fruit";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fruit:id" component={Fruit} />
      </Switch>
    </Router>
  );
}
