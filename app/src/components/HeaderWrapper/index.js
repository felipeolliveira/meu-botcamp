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
    width: 100%;
    height: 10px;
    bottom: 0;
    right: 0;
    background-color: inherit;
    transform: translateY(50%) skew(0deg, 1deg);
  }
`;

export default HeaderWrapper;
