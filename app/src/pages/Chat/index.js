import React from "react";

import ChatWrapper from "../../components/ChatWrapper";
import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import HeaderLogout from "../../components/HeaderLogout";
import FooterWrapper from "../../components/FooterWrapper";
import InputUser from "../../components/InputUser";

const Chat = () => (
  <ChatWrapper>
    <HeaderWrapper>
      <LogoBotcamp small />
      <HeaderLogout />
    </HeaderWrapper>
    <FooterWrapper>
      <InputUser />
    </FooterWrapper>
  </ChatWrapper>
);

export default Chat;
