import styled from "styled-components";

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: #26265e;
  padding: 10px 16px;
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    border: 0px solid transparent;
    border-top: 14px solid #26265e;
    border-left-width: 100vw;
  }
`;

export default HeaderWrapper;
