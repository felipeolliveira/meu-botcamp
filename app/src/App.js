import React from "react";

import "./style/reset.css";
import "./style/customize-reset.css";

import LoginWrapper from "./components/LoginWrapper";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";

const App = () => (
  <LoginWrapper>
    <LogoBotcamp />
    <BtnBotcamp>Entrar</BtnBotcamp>
  </LoginWrapper>
);

export default App;