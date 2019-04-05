import React from "react";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import HeaderLogout from "../../components/HeaderLogout";

const Chat = () => (
  <HeaderWrapper>
    <LogoBotcamp width="200px" />
    <HeaderLogout />
  </HeaderWrapper>
);

export default Chat;
