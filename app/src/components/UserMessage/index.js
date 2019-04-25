import styled from "styled-components";

const UserMessage = styled.p.attrs((props) => ({
  children: props.children
  }))`
  max-width: 100%;
  min-width: 100px;
  height: 40px;
  margin-left: auto;
  padding: 10px 20px;
  background-color: #ee3e25;
  opacity: .83;
  color: #fff;
  border-radius: 15px 0 15px 15px;
  line-height: 20px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 10px solid #ee3e25;
    border-right: 3px solid transparent;
    transform: translateX(100%);
  }
`;

export default UserMessage;