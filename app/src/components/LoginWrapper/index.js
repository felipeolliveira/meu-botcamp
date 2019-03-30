import styled from "styled-components";

import background from "../../img/ecossistema-background.png";

const LoginWrapper = styled.main`
  height: 100vh;
  background: url(${background}) no-repeat top left;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25vh 0 15vh;
`;

export default LoginWrapper;