import styled from "styled-components";

import logoutIcon from "../../img/logout.svg";

const HeaderLogout = styled.img.attrs({
  src: logoutIcon,
  alt: "ícone para sair"
})`
  width: 30px;
`;

export default HeaderLogout;
