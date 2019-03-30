import React from "react";

import "./style/reset.css";
import "./style/customize-reset.css";
import "./App.css";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";

const App = () => (
  <section className="container-wrap"> 
    <LogoBotcamp />
    <BtnBotcamp />
  </section>
);

export default App;