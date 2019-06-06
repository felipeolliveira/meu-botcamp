import React from "react";
import {Link} from "react-router-dom";

import ChatWrapper from "../../components/ChatWrapper";
import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import HeaderLogout from "../../components/HeaderLogout";
import MessageWrapper from "../../components/MessageWrapper"
import UserMessage from "../../components/UserMessage"
import FooterWrapper from "../../components/FooterWrapper";
import InputMessage from "../../components/InputMessage";

const Chat = () => (
  <ChatWrapper>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/"><HeaderLogout /></Link>
    </HeaderWrapper>
    <MessageWrapper>
      <UserMessage>!cpf</UserMessage>
    </MessageWrapper>
    <FooterWrapper>
      <InputMessage />
    </FooterWrapper>
  </ChatWrapper>
);

export default Chat;
