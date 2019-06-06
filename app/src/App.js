import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

import "./style/reset.css";
import "./style/customize-reset.css";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/chat" component={Chat}/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
