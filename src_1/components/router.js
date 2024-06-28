import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./home";
import Dashboard from "./Dashboard";
import About from "./pages/About";
import Form from "./pages/Form";
import Title from "../components/Title";
import MoreDetails from "./pages/Moredetails";
import Transaction from "./pages/Transaction";

const AppRouter = () => (
  <Router>
    <Title />
    <Switch>
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/about" component={About} exact />
      <Route path="/form" component={Form} exact />
      <Route path="/more/:id" component={MoreDetails} exact />
      <Route path="/transaction" component={Transaction} exact />
    </Switch>
  </Router>
);

export default AppRouter;
