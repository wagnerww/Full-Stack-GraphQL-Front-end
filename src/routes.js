import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Search from "./pages/Recipe/Search";
import AddRecipe from "./pages/Recipe/AddRecipe";
import RecipePage from "./pages/Recipe/RecipePage";

import Profile from "./pages/Profile";

import SingIn from "./pages/Auth/SignIn";
import SingUp from "./pages/Auth/SignUp";

import withSession from "./services/withSession";

const Routes = ({ refetch, session }) => (
  <BrowserRouter>
    <Fragment>
      <NavBar session={session} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route
          path="/recipe/add"
          render={() => <AddRecipe session={session} />}
        />
        <Route path="/recipes/:_id" component={RecipePage} />
        <Route path="/profile" render={() => <Profile session={session} />} />
        <Route path="/signin" render={() => <SingIn refetch={refetch} />} />
        <Route path="/signup" render={() => <SingUp refetch={refetch} />} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

const RoutesWithSession = withSession(Routes);

export default RoutesWithSession;
