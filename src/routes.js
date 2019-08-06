import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SingIn from "./pages/Auth/SignIn";
import SingUp from "./pages/Auth/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/signin" component={SingIn} />
      <Route path="/signup" component={SingUp} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
