import styled from "styled-components";

import logoutIcon from "../../img/logout.svg";

const HeaderLogout = styled.img.attrs({
  src: logoutIcon,
  alt: "ícone para sair"
})`
  float: right;
`;

export default HeaderLogout;
